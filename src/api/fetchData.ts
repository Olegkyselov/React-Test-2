import xml2js from 'xml2js';
import * as moment from 'moment';

import { capitalizeFirstLetter } from '#root/src/utils';

export async function fetchData() {
  const [patientMainInfo, weightObservations, heightObservations] = await Promise.all(
    await Promise.all(
      await Promise.all([
        fetch('http://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB'),
        fetch(
          'http://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=29463-7'
        ),
        fetch(
          'http://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=8302-2'
        ),
      ]).then((requests) => requests.map((request) => request.text()))
    ).then((requestsText) => requestsText.map((requestText) => xml2js.parseStringPromise(requestText)))
  );

  const dob = patientMainInfo.Patient.birthDate[0].$.value;
  const sex = patientMainInfo.Patient.gender[0].$.value;
  const weightKg = weightObservations.Bundle.entry[0].resource[0].Observation[0].valueQuantity[0].value[0].$.value;
  const heightSm = heightObservations.Bundle.entry[0].resource[0].Observation[0].valueQuantity[0].value[0].$.value;

  return {
    age: String(moment().diff(moment(dob, 'YYYY-MM-DD'), 'years')),
    sex: capitalizeFirstLetter(sex),
    weight: weightKg,
    height: heightSm,
  };
}

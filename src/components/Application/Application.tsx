import * as React from 'react';

import xml2js from 'xml2js';
import * as moment from 'moment';

import { InfoTabs } from './components/InfoTabs';
import { CreatinineClearanceForm } from './components/CreatinineClearanceForm';
import { creatinineClearance } from '#root/src/texts/advice';

import './styles.css';
import { capitalizeFirstLetter } from '#root/src/utils/capitalizeFirstLetter';

export const Application = () => {
  const [prefilledValues, setPrefilledValues] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const [patientMainInfo, weightObservations, heightObservations] = await Promise.all(
        await Promise.all(
          await Promise.all([
            fetch('https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB'),
            fetch(
              'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=29463-7'
            ),
            fetch(
              'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Observation?patient=Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB&code=8302-2'
            ),
          ]).then((requests) => requests.map((request) => request.text()))
        ).then((requestsText) => requestsText.map((requestText) => xml2js.parseStringPromise(requestText)))
      );

      const dob = patientMainInfo.Patient.birthDate[0].$.value;
      const sex = patientMainInfo.Patient.gender[0].$.value;
      const weightKg = weightObservations.Bundle.entry[0].resource[0].Observation[0].valueQuantity[0].value[0].$.value;
      const heightSm = heightObservations.Bundle.entry[0].resource[0].Observation[0].valueQuantity[0].value[0].$.value;

      setPrefilledValues({
        age: String(moment().diff(moment(dob, 'YYYY-MM-DD'), 'years')),
        sex: capitalizeFirstLetter(sex),
        weight: weightKg,
        heigh: heightSm,
      });
    }

    fetchData();
  }, []);

  const handleCreatinineClearanceFormSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    debugger;
    return;
  }, []);

  return (
    <div className="container">
      <InfoTabs advice={creatinineClearance} />
      <CreatinineClearanceForm data={prefilledValues} onSubmit={handleCreatinineClearanceFormSubmit} />
      <p>results: score 5, low</p>
    </div>
  );
};

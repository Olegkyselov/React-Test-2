import * as React from 'react';

import { InfoTabs } from './components/InfoTabs';
import { CreatinineClearanceForm } from './components/CreatinineClearanceForm';
import { creatinineClearance } from '#root/src/texts/advice';

import { fetchData } from '#root/src/api';

import { calculateCreatinineClearance } from '#root/src/utils';
import { CreatinineClearanceCalculationData } from '#root/src/interfaces/CreatinineClearanceCalculationData';

import './styles.css';
import { CreatinineClearanceResult } from './components/CreatinineClearanceResult';

export const Application = () => {
  const [prefilledValues, setPrefilledValues] = React.useState(null);
  const [calcaulationResults, setCalcaulationResults] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await fetchData();
      setPrefilledValues(data);
    })();
  }, []);

  const handleCreatinineClearanceFormSubmit = React.useCallback((formData) => {
    const parsedFormData: CreatinineClearanceCalculationData = {
      sex: formData.sex,
      age: parseInt(formData.age, 10),
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      creatinine: parseFloat(formData.creatinine),
    };

    setCalcaulationResults(calculateCreatinineClearance(parsedFormData));
  }, []);

  return (
    <div className="container">
      <InfoTabs advice={creatinineClearance} />
      <CreatinineClearanceForm data={prefilledValues} onSubmit={handleCreatinineClearanceFormSubmit} />
      {calcaulationResults ? <CreatinineClearanceResult {...calcaulationResults} /> : null}
    </div>
  );
};

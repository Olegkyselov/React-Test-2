import { CreatinineClearanceCalculationResult } from '#root/src/interfaces';
import * as React from 'react';

export function CreatinineClearanceResult({ score, severity }: CreatinineClearanceCalculationResult) {
  return <p>result: score {score}, {severity}</p>;
}

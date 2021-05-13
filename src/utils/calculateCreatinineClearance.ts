import { CreatinineClearanceCalculationData, CreatinineClearanceCalculationResult } from '../interfaces';

export function calculateCreatinineClearance(
  data: CreatinineClearanceCalculationData
): CreatinineClearanceCalculationResult {
  let score = 0;
  if (data.sex === 'Male') {
    score += 1;
  }
  if (data.age > 40) {
    score += 1;
  }
  if (data.weight > 60) {
    score += 1;
  }
  if (data.creatinine > 0.7) {
    score += 1;
  }
  if (data.height > 160) {
    score += 1;
  }

  return {
    score,
    severity: score > 3 ? 'hight' : 'low',
  };
}

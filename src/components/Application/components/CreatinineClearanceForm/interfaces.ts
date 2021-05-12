import { FormEvent } from 'react';

export interface CreatinineClearanceFormProps {
  data: {
    sex: 'Female' | 'Male' | unknown;
    age: string | unknown;
    weight: string | unknown;
    height: string | unknown;
  };
  onSubmit: (FormEvent) => void;
}

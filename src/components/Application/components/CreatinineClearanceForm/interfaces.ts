export interface CreatinineClearanceFormProps {
  data?: {
    sex: 'Female' | 'Male';
    age: string;
    weight: string;
    height: string;
  };
  onSubmit: (formData : {
      sex: 'Female' | 'Male';
      age: string;
      weight: string;
      height: string;
  }) => void;
}

import classNames from 'classnames';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { CreatinineClearanceFormProps } from './interfaces';

export function CreatinineClearanceForm(props: CreatinineClearanceFormProps) {
  const { register, handleSubmit, formState, reset, watch } = useForm({
    defaultValues: {
      age: props.data?.age,
      sex: props.data?.sex,
      weight: props.data?.weight,
      height: props.data?.height,
      creatinine: null,
    },
  });

  // required cause defaultValues updates after data fetching
  React.useEffect(() => {
    reset({
      age: props.data?.age,
      sex: props.data?.sex,
      weight: props.data?.weight,
      height: props.data?.height,
      creatinine: null,
    });
  }, [props.data]);

  const sexChosen = watch('sex');
  const isFemaleGender = sexChosen === 'Female';
  const isMaleGender = sexChosen === 'Male';

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <hr />
      <div className="form-group row">
        <label className="col-sm-3 col-md-6 col-form-label">Sex</label>
        <div className="input-group input-group-lg col-sm-9 col-md-6">
          <div className="btn-group btn-group-lg btn-group-toggle w-100" data-toggle="buttons">
            <label className={classNames('btn', isFemaleGender ? 'active btn-info' : 'btn-light')}>
              <input disabled={!props.data} type="radio" name="sex" id="female" value="Female" {...register('sex')} />
              Female
            </label>
            <label className={classNames('btn', isMaleGender ? 'active btn-info' : 'btn-light')}>
              <input disabled={!props.data} type="radio" name="sex" id="male" value="Male" {...register('sex')} />
              Male
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="age" className="col-sm-3 col-md-6 col-form-label">
          Age
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6">
          <input
            required
            disabled={!props.data}
            type="number"
            className={classNames('form-control', { 'is-invalid': formState.errors?.weight })}
            id="age"
            {...register('age', { min: 1 })}
          />
          <div className="input-group-append">
            <span className="input-group-text">years</span>
          </div>
          <div className="invalid-feedback">{formState.errors?.age ? 'Please enter the correct age' : null}</div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="weight" className="col-sm-3 col-md-6 col-form-label">
          Weight
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6 ">
          <input
            required
            disabled={!props.data}
            type="number"
            step="any"
            className={classNames('form-control', { 'is-invalid': formState.errors?.weight })}
            id="weight"
            {...register('weight', { min: 1 })}
          />
          <div className="input-group-append">
            <span className="input-group-text">kg</span>
          </div>
          <div className="invalid-feedback">{formState.errors?.weight ? 'Please enter the correct weight' : null}</div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="creatinine" className="col-sm-3 col-md-6 col-form-label">
          Creatinine
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6 ">
          <input
            required
            disabled={!props.data}
            type="number"
            step="any"
            className={classNames('form-control', { 'is-invalid': formState.errors?.creatinine })}
            id="creatinine"
            {...register('creatinine', { min: 0 })}
          />
          <div className="input-group-append">
            <span className="input-group-text">mg/dL</span>
          </div>
          <div className="invalid-feedback">
            {formState.errors?.creatinine ? 'Please enter the correct value' : null}
          </div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="height" className="col-sm-3 col-md-6 col-form-label">
          Height
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6">
          <input
            required
            disabled={!props.data}
            type="number"
            step="any"
            className={classNames('form-control', { 'is-invalid': formState.errors?.height })}
            id="height"
            {...register('height', { min: 1 })}
          />
          <div className="input-group-append">
            <span className="input-group-text">cm</span>
          </div>
          <div className="invalid-feedback">{formState.errors?.height ? 'Please enter the correct height' : null}</div>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <input
            disabled={!props.data}
            type="submit"
            className="btn btn-info btn-lg btn-primary w-100"
            value="Calculate"
          />
        </div>
      </div>
    </form>
  );
}

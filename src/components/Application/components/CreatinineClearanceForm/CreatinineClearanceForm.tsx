import * as React from 'react';

import { CreatinineClearanceFormProps } from './interfaces';

export function CreatinineClearanceForm(props : CreatinineClearanceFormProps) {
  return (
    <form onSubmit={props.onSubmit}>
      <hr />
      <div className="form-group row">
        <label className="col-sm-3 col-md-6 col-form-label">Sex</label>
        <div className="input-group input-group-lg col-sm-9 col-md-6">
          <div className="btn-group btn-group-lg btn-group-toggle w-100" data-toggle="buttons">
            <label className="btn btn-info active">
              <input type="radio" name="sex" id="female" checked /> Female
            </label>
            <label className="btn btn-light">
              <input type="radio" name="sex" id="male" /> Male
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
          <input type="number" className="form-control" id="age" />
          <div className="input-group-append">
            <span className="input-group-text">years</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="weight" className="col-sm-3 col-md-6 col-form-label">
          Weight
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6 ">
          <input type="text" className="form-control" id="weight" />
          <div className="input-group-append">
            <span className="input-group-text">kg</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="creatinine" className="col-sm-3 col-md-6 col-form-label">
          Creatinine
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6 ">
          <input type="text" className="form-control" id="creatinine" />
          <div className="input-group-append">
            <span className="input-group-text">mg/dL</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label htmlFor="height" className="col-sm-3 col-md-6 col-form-label">
          Height
        </label>
        <div className="input-group input-group-lg col-sm-9 col-md-6">
          <input type="text" className="form-control" id="height" />
          <div className="input-group-append">
            <span className="input-group-text">cm</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <input type="submit" className="btn btn-info btn-lg btn-primary w-100" value="Calculate" />
        </div>
      </div>
    </form>
  );
}

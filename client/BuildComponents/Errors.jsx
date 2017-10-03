import React from 'react';
import Panel from './../chartComponents/common/Panel';
import PanelHeader from './../chartComponents/common/PanelHeader';

const Errors = (props) => {
  let errors = props.build[props.activeBuild].errors;
  const property = [];
  let errorNum = 0;
  if (!errors.length) errors = <ul>No Errors!</ul>;
  else {
    for (let i = 0; i < errors.length; i += 1) {
      const error = errors[i];
      const key = i;
      errorNum += 1;
      property.push({ error, key });
    }
    errors = property.map(error => <ul key={error.key}>{error.error}</ul>);
  }
  errorNum = <li><div className="col-sm-4">Errors: {errorNum}</div></li>;

  return (
    <div className="row">
      <div className="col-md-12 custom_padding" >
        <Panel>
          <PanelHeader title='Errors' />
          <ul>
            {errorNum}
          </ul>
          {errors}
        </Panel>
      </div>
    </div>
  );
};


export default Errors;

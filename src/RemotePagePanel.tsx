import React from 'react';
import { PanelProps } from '@grafana/data';
import { getLocationSrv } from '@grafana/runtime';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export const RemotePagePanel: React.FC<Props> = ({ options, data, width, height }) => {

  window.addEventListener("message",(event) =>{
    console.log(event.data)
    console.log(options.vars)
    var vars = options.vars;
    if ( vars.trim() != "" ) {
      getLocationSrv().update({
      query: {
        'var-service': 'billing',
      },
      partial: true,
      replace: true,
    });
    }
  })

  

  
  return (
    <div style={{height:height}}>
      <iframe src={options.src}  width="100%" height="100%"></iframe>
    </div>
  );
};



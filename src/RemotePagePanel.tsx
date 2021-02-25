import React from 'react';
import { PanelProps } from '@grafana/data';
import { getLocationSrv } from '@grafana/runtime';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> { }

export const RemotePagePanel: React.FC<Props> = ({ options, data, width, height }) => {

  window.addEventListener("message", (event) => {
    var forwardParam = event.data["forwardParam"]
    if (forwardParam && options.redirectUrl) {
      window.open(options.redirectUrl+forwardParam,options.redirectTarget)
      return
    }
    var vars = options.vars;
    if (vars.trim() != "") {
      var ns = vars.split(",")
      var query: any = {};
      for (let i = 0; i < ns.length; i++) {
        var name = ns[i];
        var value = event.data[name];
        var varName = "var-" + name;
        if (value != undefined) {
          query[varName] = value;
        }
      }
      if (query != {}) {
        getLocationSrv().update({
          query: query,
          partial: true,
          replace: true,
        });
      }
    }
  })




  return (
    <div style={{ height: height }}>
      <iframe src={options.src} width="100%" height="100%"></iframe>
    </div>
  );
};



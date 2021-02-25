import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { RemotePagePanel } from './RemotePagePanel';

export const plugin = new PanelPlugin<SimpleOptions>(RemotePagePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'src',
      name: 'Remote Page URL',
      description: 'please input your remote page url',
      defaultValue: 'http://www.bing.com',
    })
    .addTextInput({
      path: 'vars',
      name: 'Variables allow to apply',
      description: 'Only configured variables can be apply from remote page "postMessage"',
      defaultValue: '',
    })
    .addTextInput({
      path: 'redirectUrl',
      name: 'Redirect URL',
      description: 'if remote page post data with "forwardParam", this action will be trigger',
      defaultValue: '',
    })
    .addSelect({
      showIf: o=>o.redirectUrl!=undefined && o.redirectUrl!="",
      path:"redirectTarget",
      name:"Redirect Target",
      settings:{
        options:[
          {label:"_blank",value:"_blank"},
          {label:"_self",value:"_self"},
          // {label:"_parent",value:"_parent"},
          // {label:"_top",value:"_top"}
        ]
      },
      defaultValue:"_blank"
    })
});

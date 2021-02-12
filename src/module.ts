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
});

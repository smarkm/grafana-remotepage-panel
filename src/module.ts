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
      description: 'if * will allow all applies, otherwise will only apply the configurated, mutil values will split with ","',
      defaultValue: '*',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: config => config.showSeriesCount,
    });
});

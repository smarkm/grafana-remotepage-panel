import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';

interface Props extends PanelProps<SimpleOptions> {}

export const RemotePagePanel: React.FC<Props> = ({ options, data, width, height }) => {
  return (
    <div style={{height:height}}>
      <iframe src={options.src} width="100%" height="100%"></iframe>
    </div>
  );
};



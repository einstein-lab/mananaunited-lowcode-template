import React from 'react';

export type TDemoComponentProps = {};

export const Demo: React.FunctionComponent<TDemoComponentProps> = (props) => {
  return <div>{JSON.stringify(props)}</div>;
};

import React from "react";
import "./styles.less";

export type TDemoComponentProps = {};

/* 预览时显示的组件 */
export const DemoPreview: React.FunctionComponent<TDemoComponentProps> = () => {
  return <div className={"blue"}>preview 12341234</div>;
};

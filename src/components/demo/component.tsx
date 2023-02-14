import React from "react";
import "./styles.less";

export type TDemoComponentProps = {};

/* 编辑时显示的组件 */
export const Demo: React.FunctionComponent<TDemoComponentProps> = () => {
  return <div className={"blue"}>12341234</div>;
};

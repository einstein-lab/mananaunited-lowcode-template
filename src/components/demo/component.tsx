import React, { useEffect } from "react";
import "./styles.less";

export type TDemoComponentProps = {};

/* 编辑时显示的组件 */
export const Demo: React.FunctionComponent<TDemoComponentProps> = () => {
  useEffect(() => {
    console.log("他是支持hook的");
  }, []);

  return <div className={"blue"}>12341234</div>;
};

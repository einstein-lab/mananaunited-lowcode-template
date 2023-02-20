import { useEffect } from "react";
import "./styles.less";

/* 编辑时显示的组件 */
export const Demo = () => {
  useEffect(() => {
    console.log("他是支持hook的");
  }, []);

  return <div className={"blue"}>12341234</div>;
};

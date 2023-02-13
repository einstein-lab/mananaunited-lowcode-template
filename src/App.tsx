import React from "react";
import ReactDOM from "react-dom";
import "./style.less";
import {
  LowCodeDesigner,
  useDesignerLayout,
} from "@mananaunited/low-code-formily-design";
import { useComponents } from "./useComponents";

const App = () => {
  const { designer } = useDesignerLayout();
  const customComponents = useComponents();
  return (
    <LowCodeDesigner designer={designer} customComponents={customComponents} />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

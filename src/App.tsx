import React from "react";
import {
  LowCodeDesigner,
  useDesignerLayout,
} from "@mananaunited/low-code-formily-design/lib/index";
import "./App.less";
import { useComponents } from "./hooks/useComponents";

const App: React.FunctionComponent = () => {
  const { designer } = useDesignerLayout();
  const customComponents = useComponents();
  return (
    <LowCodeDesigner designer={designer} customComponents={customComponents} />
  );
};

export default App;

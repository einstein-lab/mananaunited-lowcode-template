import { Input } from "antd";
import { Input as InputDesign } from "@mananaunited/low-code-formily-antd";

import { DemoComponent } from "./components";
import { Demo } from "./components/demo/preview";

export const useComponents = () => {
  return [
    {
      name: "DemoComponent",
      type: "分类1",
      design: DemoComponent,
      preview: Demo,
    },
    {
      name: "Input",
      type: "分类2",
      design: InputDesign,
      preview: Input,
    },
  ];
};

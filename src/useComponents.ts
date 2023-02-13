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
  ];
};

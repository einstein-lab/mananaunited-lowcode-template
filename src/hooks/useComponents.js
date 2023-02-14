import { DemoComponent, DemoProview } from "../components";

export const useComponents = () => {
  return [
    {
      name: "DemoComponent",
      type: "分类1",
      design: DemoComponent,
      preview: DemoProview,
    },
  ];
};

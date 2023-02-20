import { createBehavior, createResource } from "@mananaunited/low-code-core";
import { LowCodeIcon } from "@mananaunited/low-code-react";
import { observer } from "@formily/react";
import { Demo } from "./component";
import { createFieldSchema } from "../../utils/fields";
import { DemoComponentSchema } from "../../schema";
import { DemoComponentLocales } from "../../locales";
import { DemoPreview } from "./preview";

export const DemoComponent = observer(Demo);

DemoComponent.Behavior = createBehavior({
  name: "DemoComponent",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "DemoComponent",
  designerProps: {
    propsSchema: createFieldSchema(DemoComponentSchema),
    icon: <LowCodeIcon name="lc-button" />,
  },
  designerLocales: DemoComponentLocales,
});

DemoComponent.Resource = createResource({
  icon: <LowCodeIcon name="lc-button" />,
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "DemoComponent",
        "x-decorator": "FormItem",
        "x-reactions": {
          componentName: "Demo",
        },
        "x-component-props": {
          count: 1,
        },
      },
    },
  ],
});

export default {
  name: "Demo",
  type: "分类1",
  design: DemoComponent,
  preview: DemoPreview,
};

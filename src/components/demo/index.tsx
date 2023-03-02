import { createBehavior, createResource } from "@mananaunited/low-code-core";
import { DnFC } from "@mananaunited/low-code-react";
import { observer } from "@formily/react";
import { Demo } from "./component";
import { createFieldSchema } from "../../utils/fields";
import { DemoComponentSchema } from "../../schema";
import { DemoComponentLocales } from "../../locales";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { DemoPreview } from "./preview";

export const DemoComponent: DnFC = observer(Demo);

DemoComponent.Behavior = createBehavior({
  name: "DemoComponent",
  extends: ["Field"],
  selector: (node) => node.props?.["x-component"] === "DemoComponent",
  designerProps: {
    propsSchema: createFieldSchema(DemoComponentSchema),
    icon: <SafetyCertificateOutlined />,
  },
  designerLocales: DemoComponentLocales,
});

DemoComponent.Resource = createResource({
  icon: <SafetyCertificateOutlined />,
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
  name: "DemoComponent",
  from: "#dirName#",
  design: DemoComponent,
  preview: DemoPreview,
};

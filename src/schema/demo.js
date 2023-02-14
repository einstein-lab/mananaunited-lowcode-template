export const DemoComponentSchema = {
  type: "object",
  properties: {
    count: {
      type: "string",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};

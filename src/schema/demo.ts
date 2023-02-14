import { ISchema } from '@formily/react';

export const DemoComponentSchema: ISchema = {
  type: 'object',
  properties: {
    count: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
};

import DemoComponent from "./demo";

export default {
  DemoComponent,
};

window.lowcode = {
  ...(window?.lowcode ?? {}),
  DemoComponent,
};

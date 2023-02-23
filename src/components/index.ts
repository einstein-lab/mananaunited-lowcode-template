import DemoComponent from "./demo";

export default {
  DemoComponent,
};

if (window?.lowcode?.length) {
  window.lowcode = [...window.lowcode, DemoComponent];
}
window.lowcode = [DemoComponent];

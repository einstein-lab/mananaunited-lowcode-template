import components from "../components";

export const useComponents = () => {
  return Object.values(components).map((item) => ({
    ...item,
    type: item?.from,
  }));
};

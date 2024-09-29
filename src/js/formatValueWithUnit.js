export const formatValueWithUnit = (value) => {
  if (!value) return "";
  return value.replace(/(\d)([a-zA-Z])/g, "$1 $2");
};

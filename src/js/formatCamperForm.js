export const formatCamperForm = (form) => {
  if (!form) return "";
  return form
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

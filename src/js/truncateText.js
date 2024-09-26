export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;

  const truncated = text.substr(0, text.lastIndexOf(" ", maxLength));
  return `${truncated}...`;
};

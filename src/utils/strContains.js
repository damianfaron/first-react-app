export const strContains = (string, searchString) => {
  if (!string) return false;
  if (!searchString) return true; //  pusta fraza = zawsze true
  return string.toLowerCase().includes(searchString.toLowerCase());
};

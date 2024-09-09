export const formatSlug = (agencyName: string) => {
  return agencyName.toLowerCase().trim().replace(/\s+/g, "-");
};

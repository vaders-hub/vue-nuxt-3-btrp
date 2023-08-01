export const fetchCafe = async ({ page }) => {
  const result = await useCafeFetch('cafes', { method: 'get', params: { page, search: '' } });
  return result;
};

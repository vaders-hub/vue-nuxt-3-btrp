export const fetchCafe = async ({ page, search }) => {
  const result = await useCafeFetch('cafes', { method: 'get', params: { page, search } });
  return result;
};

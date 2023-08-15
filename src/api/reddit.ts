export const fetchReddit = async () => {
  const result = await useRedditFetch('redit', { method: 'get', params: { limit: '5', t: 'day' } });
  return result;
};

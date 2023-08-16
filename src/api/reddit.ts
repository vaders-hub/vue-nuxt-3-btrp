export const fetchReddit = async params => {
  const result = await useRedditFetch('top.json?', { method: 'get', params });
  return result;
};

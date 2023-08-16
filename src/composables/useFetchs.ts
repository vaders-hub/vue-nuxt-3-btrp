import { ofetch } from 'ofetch';

export const useCafeFetch = async (request, options?) => {
  return await ofetch(request, {
    baseURL: 'https://api.roastandbrew.coffee/api/v1/',
    withCredentials: true,
    ...options,
    async onRequest({ request, options }: any) {},
    async onRequestError({ request, options, error }) {},
    async onResponse({ request, response, options }: any) {
      // console.log('response success >>>> ', response._data);
    },
    async onResponseError({ request, response, options }: any) {},
  });
};

// https://www.reddit.com/r/Wallstreetbets/top.json?limit=5&t=day
export const useRedditFetch = async (request, options?) => {
  return await ofetch(request, {
    baseURL: 'https://www.reddit.com/r/Wallstreetbets/',
    withCredentials: true,
    ...options,
    async onRequest({ request, options }: any) {},
    async onRequestError({ request, options, error }) {},
    async onResponse({ request, response, options }: any) {
      response._data = response?._data?.data;
      // console.log('response success >>>> ', response._data);
    },
    async onResponseError({ request, response, options }: any) {},
  });
};

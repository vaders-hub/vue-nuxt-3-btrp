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

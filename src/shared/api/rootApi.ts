import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({})
});

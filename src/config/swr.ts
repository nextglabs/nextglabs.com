import { request } from "graphql-request";
export const fetcher = <V extends Record<string, any>>(query: string, variables?: V) =>
  request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query, variables);

export const swrConfigOptions = {
  fetcher,
  dedupingInterval: 120000, // 2mn
};

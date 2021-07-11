import { request } from "graphql-request";
export const fetcher = (query: string) => request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query);

export const swrConfigOptions = {
	fetcher,
	dedupingInterval: 120000, // 2mn
};

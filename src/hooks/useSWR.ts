import useDefaultSWR from "swr";
import { Fetcher, Key, SWRConfiguration, SWRResponse } from "swr/dist/types";

export const getAdditionalSwrProps = (data: any, error: any) => ({
	isLoading: !error && !data,
	isError: error,
});

type SWRAdditionalProps = {
	isLoading: boolean;
	isError: boolean;
};
export function useSWR<Data = any, Error = any>(
	...args:
		| [Key]
		| [Key, Fetcher<Data> | null]
		| [Key, SWRConfiguration<Data, Error> | undefined]
		| [Key, Fetcher<Data> | null, SWRConfiguration<Data, Error> | undefined]
): SWRResponse<Data, Error> & SWRAdditionalProps {
	const { data, error, ...rest } = useDefaultSWR(args);
	return {
		data,
		error,
		isLoading: !error && !data,
		isError: error,
		...rest,
	};
}

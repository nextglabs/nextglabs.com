import { DocumentNode } from "graphql";

type GraphQlData = { [key: string]: any; [index: number]: never };

interface GraphQlResponse<T extends GraphQlData> {
  data: T;
  errors?: Array<{ message: string }>;
}

export async function fetcher<T extends GraphQlData>(query: DocumentNode, variables = {}): Promise<T> {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  if (!endpoint) {
    throw new Error("NEXT_PUBLIC_GRAPHCMS_ENDPOINT environment variable is not defined");
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: query?.loc?.source?.body, variables }),
  });

  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  // cast the response JSON to GraphQlResponse with the supplied data type `T`
  const graphQlRes: GraphQlResponse<T> = await res.json();
  if (graphQlRes.errors) {
    throw new Error(graphQlRes.errors.map((err) => err.message).join("\n")); // you might want to create a custom Error class
  }
  return graphQlRes.data;
}

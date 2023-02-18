/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  "\n  query getPage($slug: String!, $locale: Locale!) {\n    page(where: { slug: $slug }, locales: [$locale]) {\n      id\n      title\n      body\n      slug\n      locale\n      meta {\n        title\n        description\n        noIndex\n        ogImage {\n          url\n          width\n          height\n          alt\n        }\n      }\n    }\n  }\n":
    types.GetPageDocument,
  "\n  query getPages {\n    pages(orderBy: updatedAt_ASC) {\n      id\n      title\n      content\n      slug\n    }\n  }\n":
    types.GetPagesDocument,
  "\n  query getProjects($locale: Locale!) {\n    projects(orderBy: updatedAt_ASC, locales: [$locale]) {\n      id\n      title\n      description\n      locale\n\n      liveUrl\n      githubUrl\n\n      frameworks\n      languages\n      libraries\n      databases\n      categories\n\n      featuredImage {\n        id\n        url\n        alt\n      }\n\n      updatedAt\n    }\n  }\n":
    types.GetProjectsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getPage($slug: String!, $locale: Locale!) {\n    page(where: { slug: $slug }, locales: [$locale]) {\n      id\n      title\n      body\n      slug\n      locale\n      meta {\n        title\n        description\n        noIndex\n        ogImage {\n          url\n          width\n          height\n          alt\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getPage($slug: String!, $locale: Locale!) {\n    page(where: { slug: $slug }, locales: [$locale]) {\n      id\n      title\n      body\n      slug\n      locale\n      meta {\n        title\n        description\n        noIndex\n        ogImage {\n          url\n          width\n          height\n          alt\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getPages {\n    pages(orderBy: updatedAt_ASC) {\n      id\n      title\n      content\n      slug\n    }\n  }\n"
): (typeof documents)["\n  query getPages {\n    pages(orderBy: updatedAt_ASC) {\n      id\n      title\n      content\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getProjects($locale: Locale!) {\n    projects(orderBy: updatedAt_ASC, locales: [$locale]) {\n      id\n      title\n      description\n      locale\n\n      liveUrl\n      githubUrl\n\n      frameworks\n      languages\n      libraries\n      databases\n      categories\n\n      featuredImage {\n        id\n        url\n        alt\n      }\n\n      updatedAt\n    }\n  }\n"
): (typeof documents)["\n  query getProjects($locale: Locale!) {\n    projects(orderBy: updatedAt_ASC, locales: [$locale]) {\n      id\n      title\n      description\n      locale\n\n      liveUrl\n      githubUrl\n\n      frameworks\n      languages\n      libraries\n      databases\n      categories\n\n      featuredImage {\n        id\n        url\n        alt\n      }\n\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

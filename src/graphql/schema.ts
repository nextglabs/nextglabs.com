export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: any;
	Hex: any;
	/** Raw JSON value */
	Json: any;
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: any;
	RGBAHue: any;
	RGBATransparency: any;
	/** Slate-compatible RichText AST */
	RichTextAST: any;
};

/** Asset system model */
export type Asset = Node & {
	__typename?: "Asset";
	/** The unique identifier */
	id: Scalars["ID"];
	/** The time the document was created */
	createdAt: Scalars["DateTime"];
	/** The time the document was updated */
	updatedAt: Scalars["DateTime"];

	/** The file handle */
	handle: Scalars["String"];
	/** The file name */
	fileName: Scalars["String"];
	/** The height of the file */
	height?: Maybe<Scalars["Float"]>;
	/** The file width */
	width?: Maybe<Scalars["Float"]>;
	/** The file size */
	size?: Maybe<Scalars["Float"]>;
	/** The mime type of the file */
	mimeType?: Maybe<Scalars["String"]>;
	/** Image alt title */
	alt?: Maybe<Scalars["String"]>;

	/** Get the url for the asset with provided transformations applied. */
	url: Scalars["String"];
};

export type Project = Node & {
	__typename?: "Project";
	/** System stage field */
	/** The unique identifier */
	id: Scalars["ID"];
	/** The time the document was updated */
	updatedAt: Scalars["DateTime"];

	/** Project title */
	title: Scalars["String"];
	/** Project description */
	description: Scalars["String"];

	liveUrl?: Maybe<Scalars["String"]>;
	githubUrl?: Maybe<Scalars["String"]>;

	featuredImage: Asset;

	categories: Array<string>;
	languages: Array<string>;
	databases: Array<string>;
	frameworks: Array<string>;
	libraries: Array<string>;
};

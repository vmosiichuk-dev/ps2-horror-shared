const CAMEL_CASE_REGEX = /[-_\s]+([a-z])/g;

export const toCamelCase = (string: string) => {
	return string
		.toLowerCase()
		.replace(CAMEL_CASE_REGEX, (_, letter: string) => letter.toUpperCase());
};

/**
 * Makes the first character of a string lowercase
 * @param str - The input string
 * @returns The string with first character in lowercase
 */
export const toLowerCaseFirstChar = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}; 
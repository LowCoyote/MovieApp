export function removeHtmlTags(str: string): string {
  if (!str) return str;
  return str.replace(/(<([^>]+)>)/gi, "");
}

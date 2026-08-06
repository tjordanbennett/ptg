/** Minimal class-name joiner. No dependency — filters falsy, joins on space. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

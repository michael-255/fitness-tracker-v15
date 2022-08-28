/**
 * Truncates a string if it exceeds the provided length.
 * @param str String to be truncated
 * @param len Max length of truncated string
 * @returns Truncated string with a '...' at the end
 */
export function truncateString(
  str: string | null | undefined,
  len = 40,
  ending: '...' | '*' = '...'
): string {
  if (str) {
    if (str.length <= len) {
      return str
    } else {
      return str.slice(0, len) + ending
    }
  }
  return '-'
}

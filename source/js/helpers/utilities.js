export function sanitizeTagInput(tag) {
  return String(tag).replace(/[^0-9a-zA-Z]/gi, '');
}
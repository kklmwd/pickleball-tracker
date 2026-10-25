// Summarises a response's shape for logs. Top-level strings are shown
// (shortened); inside arrays only the length and the first item's keys are
// shown, so lists of players never print names.
export function describe(value, depth = 0) {
  if (value == null || typeof value === 'number' || typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.length > 60 ? `${value.slice(0, 60)}…` : value;
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) {
    const first = value.find((v) => v && typeof v === 'object');
    if (depth === 0 && first) return [`${value.length} items`, describe(first, depth + 1)];
    return `[${value.length} items${first ? `; keys: ${Object.keys(first).join(',')}` : ''}]`;
  }
  if (typeof value === 'object') {
    if (depth >= 3) return `{${Object.keys(value).join(',')}}`;
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, describe(v, depth + 1)]));
  }
  return typeof value;
}

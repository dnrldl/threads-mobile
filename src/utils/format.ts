export function formatCount(count: number): string {
  if (count < 1000) return count.toString();
  if (count < 1_000_000) {
    const value = count / 1000;
    return `${value.toFixed(Number.isInteger(value) ? 0 : 1)}k`;
  }
  const value = count / 1_000_000;
  return `${value.toFixed(Number.isInteger(value) ? 0 : 1)}m`;
}

export function formatHandle(author: string): string {
  return author.toLowerCase().replace(/[^a-z0-9]/g, "");
}

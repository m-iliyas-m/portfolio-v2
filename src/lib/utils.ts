export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

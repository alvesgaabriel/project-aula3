export function validateTitle(title: string): boolean {
  const trimmedTitle = title.trim();

  if (trimmedTitle.length === 0) {
    return false;
  }

  return trimmedTitle.length >= 5 && trimmedTitle.length <= 100;
}

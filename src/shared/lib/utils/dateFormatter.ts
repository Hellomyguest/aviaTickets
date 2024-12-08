export const dateFormatter = (dateStr: string) => {
  const parts = dateStr.split('.');

  if (parts.length !== 3) {
    return dateStr;
  }

  const [day, month, year] = parts.map(Number);

  const date = new Date(year, month - 1, day);

  const formatted = new Intl.DateTimeFormat('ru-Ru', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);

  return formatted.split(',').reverse().join(', ');
};

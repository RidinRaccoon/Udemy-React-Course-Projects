// @ts-nocheck

export async function fetchEvents(params: {
  signal: AbortSignal;
  searchTerm: string;
}) {
  let url = 'http://localhost:3001/events';
  const { searchTerm } = params;
  if (searchTerm) url += `?search=${searchTerm}`;

  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error('An error occured while fecthing events.');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();
  return events;
}

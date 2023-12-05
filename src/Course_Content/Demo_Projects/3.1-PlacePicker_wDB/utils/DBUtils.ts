// import { TPlace } from '../components/Places/Place';

export async function updateSelectedPlaces(places: string[]) {
  const response = await fetch('http://localhost:3001/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update selected places.');
  }

  return resData;
}

export async function removeSelectedPlaces(places: string[]) {
  const response = await fetch('http://localhost:3001/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to remove selected place.');
  }

  return resData;
}

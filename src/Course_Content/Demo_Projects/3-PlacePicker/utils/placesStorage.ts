// import { AVAILABLE_PLACES } from '../data/data';

const key = 'selectedPlaces';

export const getStoredPlaces = () => {
  const storedIds = JSON.parse(localStorage.getItem(key)!) || [];
  return storedIds;
};

export const addToLocalStorage = (id: string) => {
  const storedIds = getStoredPlaces();
  if (storedIds.indexOf(id) === -1)
    localStorage.setItem(key, JSON.stringify([id, ...storedIds]));
};

export const removeFromLocalStorage = (id: string) => {
  const storedIds = getStoredPlaces();
  localStorage.setItem(
    key,
    JSON.stringify(storedIds.filter((placeId: string) => placeId !== id)),
  );
};

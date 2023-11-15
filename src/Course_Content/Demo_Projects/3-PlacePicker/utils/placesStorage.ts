// import { AVAILABLE_PLACES } from '../data/data';

const key = 'selectedPlaces';

/** Gets the list of place's ids from local storage \
 * `key='selectedPlaces'` */
export const getStoredPlaces = () => {
  const storedIds: string[] = JSON.parse(localStorage.getItem(key)!) || [];
  return storedIds;
};

/** Adds a new place id to the local storage \
 * `key='selectedPlaces'` */
export const addToLocalStorage = (id: string) => {
  const storedIds = getStoredPlaces();
  if (storedIds.indexOf(id) === -1)
    localStorage.setItem(key, JSON.stringify([id, ...storedIds]));
};

/** Removes the place id from local storage \
 * `key='selectedPlaces'` */
export const removeFromLocalStorage = (id: string) => {
  const storedIds = getStoredPlaces();
  localStorage.setItem(
    key,
    JSON.stringify(storedIds.filter((placeId: string) => placeId !== id)),
  );
};

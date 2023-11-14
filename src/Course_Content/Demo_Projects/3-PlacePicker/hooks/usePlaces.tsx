import * as React from 'react';
import { DeletePlacePrompt, TPlace } from '../components/Places/_index';
import { Modal /* , ModalHandler */ } from '../components/UI/Modal';
import { AVAILABLE_PLACES } from '../data/data';
import { sortPlacesByDistance } from '../utils/loc';

import * as storage from '../utils/placesStorage';
// Get stored places from local storage

const storedPlaces = storage.getStoredPlaces();
const places = AVAILABLE_PLACES.filter(
  (place) => storedPlaces.indexOf(place.id) >= 0,
);

/** Imports the available places data and manages the selected places state */
export function usePlaces() {
  const [availablePlaces, setAvailablePlaces] = React.useState<TPlace[]>([]);
  const [selectedPlaces, setSelectedPlaces] = React.useState<TPlace[]>(places);
  const selectedPlace = React.useRef('');
  const [openModal, setOpenModal] = React.useState(false);

  // Sort Available Places by user location
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLoc = position.coords;
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        userLoc.latitude,
        userLoc.longitude,
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  const addSelectedPlace = (id: string) => {
    setSelectedPlaces((prevPlaces) => {
      const alreadySelected = prevPlaces.some((place) => place.id === id);
      if (!alreadySelected) {
        const selected = AVAILABLE_PLACES.find((place) => place.id === id);
        if (selected) return [selected, ...prevPlaces];
      }
      return prevPlaces;
    });
    storage.addToLocalStorage(id);
  };
  const showRemovalPromptModal = (id: string) => {
    setOpenModal(true);
    selectedPlace.current = id;
  };
  const cancelRemoval = () => {
    setOpenModal(false);
  };
  const removePlace = () => {
    setSelectedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    setOpenModal(false);
    storage.removeFromLocalStorage(selectedPlace.current);
  };

  /** Modal window for place removal prompt */
  const RemovalPromptModal = (
    <Modal open={openModal} onClose={cancelRemoval}>
      <DeletePlacePrompt onConfirm={removePlace} onCancel={cancelRemoval} />
    </Modal>
  );

  return {
    availablePlaces,
    selectedPlaces,
    addSelectedPlace,
    RemovalPromptModal,
    showRemovalPromptModal,
  };
}

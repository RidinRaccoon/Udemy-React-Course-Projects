import React from 'react';
import { Modal } from '../components/UI/Modal';
import { DeletePlacePrompt, TPlace } from '../components/Places/_index';
// import { AVAILABLE_PLACES } from '../data/data';
import { sortPlacesByDistance } from '../utils/loc';
import * as storage from '../utils/placesStorage';

/** Imports the available places data and manages the selected places state */
export function usePlaces() {
  const [availablePlaces, setAvailablePlaces] = React.useState<TPlace[]>([]);
  const [selectedPlaces, setSelectedPlaces] = React.useState<TPlace[]>([]);
  const selectedPlace = React.useRef('');
  const [openModal, setOpenModal] = React.useState(false);

  // Get available places from backend
  React.useEffect(() => {
    fetch('http://localhost:3001/places')
      .then((response) => response.json())
      .then((responseData: { places: TPlace[] }) => {
        // setAvailablePlaces(responseData.places);
        // Sort by user location ( closest )
        navigator.geolocation.getCurrentPosition((position) => {
          const userLoc = position.coords;
          const sortedPlaces = sortPlacesByDistance(
            responseData.places,
            userLoc.latitude,
            userLoc.longitude,
          );
          setAvailablePlaces(sortedPlaces);
        });

        // Get stored place IDs from local storage
        const storedPlaceIds = storage.getStoredPlaces();
        const storedPlaces = responseData.places.filter(
          (place: TPlace) => storedPlaceIds.indexOf(place.id) >= 0,
        );
        setSelectedPlaces(storedPlaces);
      });
  }, []);

  /** Adds place to the `selectedPlaces` state */
  const addSelectedPlace = (id: string) => {
    setSelectedPlaces((prevPlaces) => {
      const alreadySelected = prevPlaces.some((place) => place.id === id);
      if (!alreadySelected) {
        const selected = availablePlaces.find((place) => place.id === id);
        if (selected) return [selected, ...prevPlaces];
      }
      return prevPlaces;
    });
    storage.addToLocalStorage(id);
  };
  /** Displays the `RemovalPromptModal` */
  const showRemovalPromptModal = (id: string) => {
    setOpenModal(true);
    selectedPlace.current = id;
  };
  /** Closes the `RemovalPromptModal` */
  const cancelRemoval = () => {
    setOpenModal(false);
  };
  /** Removes place from `selectedPlaces` state */
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

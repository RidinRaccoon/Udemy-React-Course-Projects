import React from 'react';
import { Modal } from '../components/UI/Modal';
import { DeletePlacePrompt, TPlace } from '../components/Places/_index';
import { sortPlacesByDistance } from '../utils/loc';
import * as storage from '../utils/placesStorage';

/** Imports the available places data and manages the selected places state
 * `PlacePickerDBApp` */
export function usePlaces() {
  const [availablePlaces, setAvailablePlaces] = React.useState<TPlace[]>([]);
  const [selectedPlaces, setSelectedPlaces] = React.useState<TPlace[]>([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);
  const selectedPlace = React.useRef('');

  // Get the available and selected places from backend
  React.useEffect(() => {
    /** Get select place IDs from the backend */
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3001/places');
      const responseData = await response.json();
      return responseData.places;
    }
    /** Get available places from the backend */
    async function fetchSelectedPlaces(/* placeList: any */) {
      const response = await fetch('http://localhost:3001/user-places');
      const responseData = await response.json();
      return responseData.selectedPlaceIDs;
    }
    /** Updates available and selected places with received data */
    async function setPlaceInformation() {
      setIsFetching(true);
      const places = await fetchPlaces().then();
      // Sort by user location ( closest )
      navigator.geolocation.getCurrentPosition((position) => {
        const userLoc = position.coords;
        const sortedPlaces = sortPlacesByDistance(
          places,
          userLoc.latitude,
          userLoc.longitude,
        );
        setAvailablePlaces(sortedPlaces);
      });
      // Update the selected places
      const storedIDs = await fetchSelectedPlaces().then((value) => value);
      const storedPlaces = places.filter(
        (place: TPlace) => storedIDs.indexOf(place.id) >= 0,
      );
      setSelectedPlaces(storedPlaces);
      setIsFetching(false);
    }

    
    setPlaceInformation();
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
    isFetching,
    RemovalPromptModal,
    showRemovalPromptModal,
  };
}

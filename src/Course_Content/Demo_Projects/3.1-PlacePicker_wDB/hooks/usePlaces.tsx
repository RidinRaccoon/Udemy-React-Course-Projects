import React from 'react';
import { Modal } from '../components/UI/Modal';
import { DeletePlacePrompt, TPlace } from '../components/Places/_index';
import * as loc from '../utils/loc';
import * as storage from '../utils/placesStorage';
import { Error as ErrorComponent } from '../components/Error/Error';

/** Imports the available places data and manages the selected places state
 * `PlacePickerDBApp` */
export function usePlaces() {
  const [availablePlaces, setAvailablePlaces] = React.useState<TPlace[]>([]);
  const [selectedPlaces, setSelectedPlaces] = React.useState<TPlace[]>([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState<Error>();
  const selectedPlace = React.useRef('');

  // Get the available and selected places from backend
  React.useEffect(() => {
    /** Get select place IDs from the backend */
    // eslint-disable-next-line consistent-return
    async function fetchPlaces() {
      try {
        const response = await fetch('http://localhost:3001/places');

        if (!response.ok) {
          throw new Error('Failed to fetch places.');
        }
        const responseData = await response.json();
        return responseData.places;
        //
      } catch (newError) {
        setError(newError);
      }
    }
    /** Get available places from the backend */
    // eslint-disable-next-line consistent-return
    async function fetchSelectedPlaces(/* placeList: any */) {
      try {
        const response = await fetch('http://localhost:3001/user-places');
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch selected places.');
        }
        return responseData.selectedPlaceIDs;
        //
      } catch (error2) {
        setError(error2);
      }
    }
    /** Updates available and selected places with received data */
    async function setPlaceInformation() {
      setIsFetching(true);
      const places = await fetchPlaces().then();
      // Sort by user location ( closest )
      navigator.geolocation.getCurrentPosition((position) => {
        const userLoc = position.coords;
        const sortedPlaces = loc.sortPlacesByDistance(
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

  if (error) {
    return {
      Error: (
        <ErrorComponent
          title="An error occured"
          message={error.message}
          onConfirm={() => {}}
        />
      ),
    };
  }

  /** Modal window for place removal prompt */
  const RemovalPromptModal = (
    <Modal open={openModal} onClose={cancelRemoval}>
      <DeletePlacePrompt onConfirm={removePlace} onCancel={cancelRemoval} />
    </Modal>
  );

  return {
    places: {
      isFetching,
      availablePlaces,
      selectedPlaces,
      addSelectedPlace,
    },
    modal: {
      component: RemovalPromptModal,
      show: showRemovalPromptModal,
    },
    // isFetching,
    // addSelectedPlace,
    // RemovalPromptModal,
    // showRemovalPromptModal,
  };
}

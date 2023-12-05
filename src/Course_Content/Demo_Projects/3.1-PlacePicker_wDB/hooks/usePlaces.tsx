import React from 'react';
import { Modal } from '../components/UI/Modal';
import { DeletePlacePrompt, TPlace } from '../components/Places/_index';
import * as loc from '../utils/loc';
// import * as storage from '../utils/placesStorage';
import { Error as ErrorComponent } from '../components/Error/Error';
import * as DBUtils from '../utils/DBUtils';

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
    async function fetchPlaces() {
      try {
        const response = await fetch('http://localhost:3001/places');

        if (!response.ok) {
          throw new Error('Failed to fetch places.');
        }
        const responseData = await response.json();
        return responseData.places;
        //
      } catch (err) {
        setError(err);
        return [];
      }
    }
    /** Get available places from the backend */
    async function fetchSelectedPlaces() {
      try {
        const response = await fetch('http://localhost:3001/user-places');
        const responseData = await response.json();

        if (!response.ok) {
          // return new Error('Failed to fetch selected places.');
        }

        return responseData.selectedPlaceIDs;

        //
      } catch (err) {
        setError(err);
        return [];
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
    const alreadySelected = selectedPlaces.some((place) => place.id === id);
    if (alreadySelected) return;

    const selected = availablePlaces.find((place) => place.id === id);
    if (selected) {
      setSelectedPlaces((prevPlaces) => [selected, ...prevPlaces]);

      try {
        const update = [
          selected.id,
          ...selectedPlaces.map((place: TPlace) => place.id),
        ];
        DBUtils.updateSelectedPlaces(update);
        //
      } catch (err) {
        setError(err);
        setSelectedPlaces(selectedPlaces);
      }
    }
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

    try {
      const update = [
        ...selectedPlaces
          .filter((place: TPlace) => place.id !== selectedPlace.current)
          .map((place: TPlace) => place.id),
      ];
      DBUtils.updateSelectedPlaces(update);
    } catch (e) {
      setError(e);
      setSelectedPlaces(selectedPlaces);
    }
    setOpenModal(false);
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
  };
}

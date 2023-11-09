import * as React from 'react';
import { DeletePlacePrompt, TPlace } from '../components/Places/_index';
import { AVAILABLE_PLACES } from '../data/data';
import { Modal, ModalHandler } from '../components/UI/Modal';

export function usePlaces() {
  const selectedPlace = React.useRef('');
  const [selectedPlaces, setSelectedPlaces] = React.useState<TPlace[]>([]);
  const modal = React.useRef<ModalHandler>(null);

  const addSelectedPlace = (id: string) => {
    setSelectedPlaces((prevPlaces) => {
      const alreadySelected = prevPlaces.some((place) => place.id === id);
      if (!alreadySelected) {
        const selected = AVAILABLE_PLACES.find((place) => place.id === id);
        if (selected) return [selected, ...prevPlaces];
      }
      return prevPlaces;
    });
  };
  const showRemovalPromptModal = (id: string) => {
    modal.current?.open();
    selectedPlace.current = id;
  };
  const cancelRemoval = () => {
    modal.current?.close();
  };
  const removePlace = () => {
    setSelectedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    modal.current?.close();
  };
  /** Modal window for place removal prompt */
  const RemovalPromptModal = (
    <Modal ref={modal}>
      <DeletePlacePrompt onConfirm={removePlace} onCancel={cancelRemoval} />
    </Modal>
  );

  return {
    AVAILABLE_PLACES,
    selectedPlaces,
    addSelectedPlace,
    RemovalPromptModal,
    showRemovalPromptModal,
  };
}

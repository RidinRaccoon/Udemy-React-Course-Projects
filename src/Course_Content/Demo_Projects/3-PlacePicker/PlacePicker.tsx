import * as React from 'react';
import './styles/index.css';
//
import { Places } from './components/Places/_index';
import { Header } from './components/_index';
import { usePlaces } from './hooks/usePlaces';

/** PlacePicker
 *  This application stores a list of places that the user would like to visit.
 *  The places can be added or removed from a list of available places.
 */
export function PlacePickerApp() {
  const {
    availablePlaces,
    selectedPlaces,
    addSelectedPlace,
    RemovalPromptModal,
    showRemovalPromptModal,
  } = usePlaces();

  return (
    <React.StrictMode>
      {RemovalPromptModal}
      <Header />
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below"
          places={selectedPlaces}
          onSelectPlace={showRemovalPromptModal}
        />
        <Places
          title="Available Places"
          fallbackText="No places available."
          places={availablePlaces}
          onSelectPlace={addSelectedPlace}
        />
      </main>
    </React.StrictMode>
  );
}

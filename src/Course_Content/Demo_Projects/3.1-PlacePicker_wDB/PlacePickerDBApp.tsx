import * as React from 'react';
import { Places } from './components/Places/_index';
import { Header } from './components/_index';
import { usePlaces } from './hooks/usePlaces';
import './styles/index.css';

/** PlacePicker with Database \
 *  Refactored to use a dummy backend API instead of a data file. \
 **  This application stores a list of places that the user would like to visit.
 **  The places can be added or removed from a list of available places.
 */
export function PlacePickerDBApp() {
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

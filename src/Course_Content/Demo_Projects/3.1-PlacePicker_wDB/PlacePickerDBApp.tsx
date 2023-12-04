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
  const data = usePlaces();
  const hasError = 'Error' in data;
  if (hasError) {
    const { Error } = data;
    return Error;
  }

  const { places, modal } = data;
  const { isFetching, availablePlaces, selectedPlaces } = places;
  return (
    <React.StrictMode>
      {modal.component}
      <Header />
      <main>
        <Places
          title="I'd like to visit ..."
          places={selectedPlaces}
          isLoading={isFetching}
          loadingText="Loading places ..."
          fallbackText="Select the places you would like to visit below"
          onSelectPlace={modal.show}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          isLoading={isFetching}
          loadingText="Loading selected places ..."
          fallbackText="No places available."
          onSelectPlace={places.addSelectedPlace}
        />
      </main>
    </React.StrictMode>
  );
}

import * as RQ from '@tanstack/react-query';
// Types
import { TEventImage, TEvent, TFormEventData, TCustomError } from '../types';

export const queryClient = new RQ.QueryClient();

/** Gets events from the backend */
export async function fetchEvents(params: {
  signal: AbortSignal;
  searchTerm?: string | undefined;
  max?: number;
}) {
  let url = 'http://localhost:3001/events';
  const { searchTerm, max } = params;
  if (searchTerm && max) url += `?search=${searchTerm}&max=${max}`;
  else if (searchTerm) url += `?search=${searchTerm}`;
  else if (max) url += `?max=${max}`;

  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error(
      'An error occured while fecthing events.',
    ) as TCustomError;
    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  const { events } = await response.json();
  return events as TEvent[];
}

/** Creates a new event in the backend */
export async function createNewEvent(newEventData: TFormEventData) {
  const response = await fetch('http://localhost:3001/events', {
    method: 'POST',
    body: JSON.stringify({ event: newEventData }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error(
      'An error occured while creating the event.',
    ) as TCustomError;
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();
  return event as TEvent;
}

/** Gets the selectable Images for new events from the backend */
export async function fetchSelectableImages(params: { signal: AbortSignal }) {
  const { signal } = params;
  const response = await fetch('http://localhost:3001/events/images', {
    signal,
  });

  if (!response.ok) {
    const error = new Error(
      'An error occurred while fetching the images.',
    ) as TCustomError;
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();
  return images as TEventImage[];
}

/** Gets the event details from the backend */
export async function fetchEvent(params: {
  id: string | undefined;
  signal: AbortSignal;
}) {
  const { id, signal } = params;
  const response = await fetch(`http://localhost:3001/events/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error(
      'An error occurred while fetching the event details.',
    ) as TCustomError;
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();
  return event;
}

/** Deletes the corresponding event from the backend */
export async function deleteEvent(params: { id: string }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3001/events/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = new Error(
      'An error occorred while deleting the event',
    ) as TCustomError;
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

/** Updates the corresponding event details in the backend */
export async function updateEvent(params: {
  id: string | undefined;
  event: any;
}) {
  const { id, event } = params;

  const response = await fetch(`http://localhost:3001/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error(
      'An error occurred while updating the event',
    ) as TCustomError;
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  return response.json();
}

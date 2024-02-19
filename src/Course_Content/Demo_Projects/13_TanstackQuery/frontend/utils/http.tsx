// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
import * as RQ from '@tanstack/react-query';

export const queryClient = new RQ.QueryClient();

/** Gets events from the backend */
export async function fetchEvents(params: {
  signal: AbortSignal;
  searchTerm: string;
}) {
  let url = 'http://localhost:3001/events';
  const { searchTerm } = params;
  if (searchTerm) url += `?search=${searchTerm}`;

  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error('An error occured while fecthing events.');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();
  return events;
}

/** Creates a new event in the backend */
export async function createNewEvent(eventData) {
  const response = await fetch('http://localhost:3001/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occured while creating the event.');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();
  return event;
}

/** Gets the selectable Images for new events from the backend */
export async function fetchSelectableImages(params: { signal: AbortSignal }) {
  const { signal } = params;
  const response = await fetch('http://localhost:3001/events/images', {
    signal,
  });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the images.');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();
  return images;
}

/** Gets the event details from the backend */
export async function fetchEvent(params: { id: string; signal: AbortSignal }) {
  const { id, signal } = params;
  const response = await fetch(`http://localhost:3001/events/${id}`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error(
      'An error occurred while fetching the event details',
    );
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
    const error = new Error('An error occorred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

/** Updates the corresponding event details in the backend */
export async function updateEvent(params: { id: string; event: any }) {
  const { id, event } = params;

  const response = await fetch(`http://localhost:3001/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while updating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  return response.json();
}

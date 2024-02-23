import * as RQ from '@tanstack/react-query';
import { TMeal } from '../types/types';

export const queryClient = new RQ.QueryClient();

// Get Available meals from backend
export async function getMeals() {
  // const { signal } = params;
  const response = await fetch('http://localhost:3001/meals');

  if (!response.ok) {
    // Throw error
    const error = new Error('Failed to get events.');
    throw error;
  }

  const data = await response.json();
  return data as TMeal[];
}

export async function getMealDetails(params: {
  id: string;
  signal: AbortSignal;
}) {
  const { id, signal } = params;

  const response = await fetch(`http://localhost:3001/meals/${id}`, { signal });
  if (!response.ok) {
    // Throw error
    const error = new Error('Failed to get events.');
    throw error;
  }

  const data = await response.json();
  return data as TMeal;
}

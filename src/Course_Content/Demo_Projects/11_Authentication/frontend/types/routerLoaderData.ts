import { TEvent } from './events';

// EVENTS
export type TEventDetailLoaderData = { event: TEvent; events: TEvent[] };

export type TEventsLoaderData =
  | { events: TEvent[] }
  | {
      isError: boolean;
      message: string;
    };

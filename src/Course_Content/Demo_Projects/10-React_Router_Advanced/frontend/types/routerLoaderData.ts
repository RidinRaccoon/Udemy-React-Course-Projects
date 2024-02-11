import { TEvent } from './events';

export type TEventDetailLoaderData = { event: TEvent };

export type TEventsLoaderData =
  | { events: TEvent[] }
  | {
      isError: boolean;
      message: string;
    };

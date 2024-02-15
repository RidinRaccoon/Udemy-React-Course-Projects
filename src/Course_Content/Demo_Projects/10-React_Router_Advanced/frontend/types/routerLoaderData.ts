import { TEvent } from './events';

export type TEventDetailLoaderData = { event: TEvent; events: TEvent[] };

export type TEventsLoaderData =
  | { events: TEvent[] }
  | {
      isError: boolean;
      message: string;
    };

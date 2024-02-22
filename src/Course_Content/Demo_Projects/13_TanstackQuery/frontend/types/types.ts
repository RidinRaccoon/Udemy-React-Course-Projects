export type TEventImage = {
  path: string;
  caption: string;
};

export type TEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
};

export type TFormEventData = {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
};

export type TCustomError = Error & {
  code: number;
  info: { message: string };
};

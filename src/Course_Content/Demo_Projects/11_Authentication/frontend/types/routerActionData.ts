// NEW EVENT
export type TNewEventFields = {
  title: string;
  image: string;
  date: string;
  description: string;
};
export type TNewEventError = { message: string; errors: TNewEventFields };

export type TNewEventActionData = TNewEventFields | TNewEventError;

// NEWSLETTER
export type TNewsletterActionData = {
  message: string;
};

// AUTHENTICATION
export type TAuthError = { message: string; errors: { [key: string]: string } };
export type TAuthActionData = TAuthError;
export type TNewEventFields = {
  title: string;
  image: string;
  date: string;
  description: string;
};
export type TNewEventError = { message: string; errors: TNewEventFields };

export type TNewEventActionData = TNewEventFields | TNewEventError;

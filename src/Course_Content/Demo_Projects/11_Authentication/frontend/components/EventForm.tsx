import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventForm.module.css';
// Components / Types
import { TEvent, TNewEventActionData } from '../types/_index';

export function EventForm(props: {
  //
  method: 'POST' | 'PATCH';
  event: TEvent;
}) {
  const { method, event } = props;
  const { title, image, date, description } = event;
  const newEventData = RRD.useActionData() as TNewEventActionData; // NewEvent page action
  const navigate = RRD.useNavigate();
  const navigation = RRD.useNavigation();

  function cancelHandler() {
    navigate('..');
  }

  const isSubmitting = navigation.state === 'submitting';

  return (
    <RRD.Form method={method} className={classes.form}>
      {newEventData && 'errors' in newEventData && (
        <ul>
          {Object.values(newEventData.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          required
          id="title"
          type="text"
          name="title"
          defaultValue={title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          required
          id="image"
          type="url"
          name="image"
          defaultValue={image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input required id="date" type="date" name="date" defaultValue={date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          required
          id="description"
          name="description"
          rows={5}
          defaultValue={description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </RRD.Form>
  );
}

/**
 * Submits new event data from `EventForm` to the backend
 */
export async function action({ request, params }: RRD.ActionFunctionArgs) {
  const { method } = request;
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  let url = 'http://localhost:3001/events';
  if (method === 'PATCH') url += `/${params.id}`;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw RRD.json({ message: "Couldn't save event." }, { status: 500 });
  }

  return RRD.redirect('/events');
}

import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventForm.module.css';

export function EventForm(props: {
  //
  method: any;
  event: any;
}) {
  const { method, event } = props;
  const { title, image, date, description } = event;
  const navigate = RRD.useNavigate();
  const navigation = RRD.useNavigation();

  function cancelHandler() {
    navigate('..');
  }

  const isSubmitting = navigation.state === 'submitting';

  console.log(method);
  return (
    <RRD.Form method="post" className={classes.form}>
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

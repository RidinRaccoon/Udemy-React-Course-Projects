import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './EventForm.module.css';

export function EventForm(props: {
  //
  method: any;
  event: any;
}) {
  const navigate = RRD.useNavigate();
  const { method, event } = props;
  const { title, image, date, description } = event;

  function cancelHandler() {
    navigate('..');
  }
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </RRD.Form>
  );
}

// @ts-nocheck
/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { Modal } from '../UI/_index';
import { EventForm } from './EventForm';

export function NewEvent() {
  const navigate = RRD.useNavigate();

  function handleSubmit(formData) {
    console.log(formData);
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <RRD.Link to="../" className="button-text">
            Cancel
          </RRD.Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      </EventForm>
    </Modal>
  );
}

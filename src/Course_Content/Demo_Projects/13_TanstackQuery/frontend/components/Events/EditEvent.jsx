// @ts-nocheck
import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { Modal } from '../UI/_index';
import { EventForm } from './EventForm';

export function EditEvent() {
  const navigate = RRD.useNavigate();

  function handleSubmit(formData) {
    console.log(formData);
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={null} onSubmit={handleSubmit}>
        <RRD.Link to="../" className="button-text">
          Cancel
        </RRD.Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}

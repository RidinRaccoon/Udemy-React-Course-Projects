// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as RRD from 'react-router-dom';
import * as httpUtils from '../../utils/http';
// Components
import { ErrorBlock, Modal } from '../UI/_index';
import { EventForm } from './EventForm';

export function NewEvent() {
  const navigate = RRD.useNavigate();

  const mutationResults = RQ.useMutation({
    mutationFn: httpUtils.createNewEvent,
    onSuccess: () => {
      httpUtils.queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    },
  });

  const { mutate, isPending, isError, error } = mutationResults;

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <RRD.Link to="../" className="button-text">
              Cancel
            </RRD.Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            'Failed to create event.' +
              ' Please check your inputs and try again later.'
          }
        />
      )}
    </Modal>
  );
}

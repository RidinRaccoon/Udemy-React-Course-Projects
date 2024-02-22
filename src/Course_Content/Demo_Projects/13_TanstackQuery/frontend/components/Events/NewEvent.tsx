import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as RRD from 'react-router-dom';
import * as httpUtils from '../../utils/http';
// Components
import { ErrorBlock, Modal } from '../UI';
import { EventForm } from './EventForm/EventForm';
import { TFormEventData, TEvent, TCustomError } from '../../types/types';

const newEvent: TFormEventData = {
  title: '',
  image: '',
  description: '',
  date: '',
  time: '',
  location: '',
};

export function NewEvent() {
  const navigate = RRD.useNavigate();

  const mutationResults = RQ.useMutation<TEvent, TCustomError, TFormEventData>({
    mutationFn: httpUtils.createNewEvent,
    onSuccess: () => {
      httpUtils.queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    },
  });

  const { mutate, isPending, isError, error } = mutationResults;

  const handleSubmit = React.useCallback(
    (formData: TFormEventData) => {
      mutate(formData);
    },
    [mutate],
  );

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm inputData={newEvent} onSubmit={handleSubmit}>
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

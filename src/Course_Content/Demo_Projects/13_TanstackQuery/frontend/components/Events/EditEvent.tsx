// @ts-nocheck
import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { ErrorBlock, LoadingIndicator, Modal } from '../UI/_index';
import { EventForm } from './EventForm';

export function EditEvent() {
  const navigate = RRD.useNavigate();
  const { id } = RRD.useParams();

  // if(!id) return

  const mutationResults = RQ.useMutation({
    mutationFn: httpUtils.updateEvent,
    onMutate: async (data) => {
      const queryKey = ['events', id];
      const newDetails = data.event;
      const prevDetails = httpUtils.queryClient.getQueryData(queryKey);

      await httpUtils.queryClient.cancelQueries({ queryKey });
      httpUtils.queryClient.setQueryData(queryKey, newDetails);

      return { queryKey, prevDetails };
    },
    onError: (error, data, context) => {
      httpUtils.queryClient.setQueryData(
        context?.queryKey,
        context?.prevDetails,
      );
    },
    onSettled: () => {
      httpUtils.queryClient.invalidateQueries(['events', id]);
    },
  });

  const { mutate } = mutationResults;
  const handleSubmit = React.useCallback(
    (formData) => {
      mutate({ id, event: formData });
      navigate('../');
    },
    [id, mutate, navigate],
  );

  const handleClose = React.useCallback(() => {
    navigate('../');
  }, [navigate]);

  const queryResults = RQ.useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => httpUtils.fetchEvent({ id, signal }),
  });

  const { data, isPending, isError, error } = queryResults;
  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            'Failed to load event. Please check your inputs then try again later.'
          }
        />
        <RRD.Link to="../" className="button">
          Ok
        </RRD.Link>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <RRD.Link to="../" className="button-text">
          Cancel
        </RRD.Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

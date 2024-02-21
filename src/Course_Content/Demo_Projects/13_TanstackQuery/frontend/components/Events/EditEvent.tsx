// @ts-nocheck
import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { ErrorBlock, Modal } from '../UI/_index';
import { EventForm } from './EventForm';

export function EditEvent() {
  const navigate = RRD.useNavigate();
  const { state } = RRD.useNavigation();
  const submit = RRD.useSubmit();
  const { id } = RRD.useParams();

  // TODO: Validate data
  // if(!id) return

 

  const handleSubmit = React.useCallback(
    (formData) => {
      submit(formData, { method: 'PUT' });
    },
    [submit],
  );

  const handleClose = React.useCallback(() => {
    navigate('../');
  }, [navigate]);

  // Get cached data from loader
  const queryResults = RQ.useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => httpUtils.fetchEvent({ id, signal }),
    staleTime: 10000, // ms
  });

  const { data, isError, error } = queryResults;
  let content;

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
        {state === 'submitting' ? (
          <p>Sending data...</p>
        ) : (
          <>
            <RRD.Link to="../" className="button-text">
              Cancel
            </RRD.Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

// Get event details
export function loader({ params }) {
  const { id } = params;
  return httpUtils.queryClient.fetchQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => httpUtils.fetchEvent({ id, signal }),
  });
}

// Update event details
export async function action({ request, params }) {
  const { id } = params;
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await httpUtils.updateEvent({ id, event: updatedEventData });
  await httpUtils.queryClient.invalidateQueries(['events']);
  return RRD.redirect('../');
}

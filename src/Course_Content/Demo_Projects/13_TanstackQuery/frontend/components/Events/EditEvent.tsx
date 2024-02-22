import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { TCustomError, TEvent, TFormEventData } from '../../types';
import { ErrorBlock, Modal } from '../UI';
import { EventForm } from './EventForm/EventForm';

export function EditEvent() {
  const navigate = RRD.useNavigate();
  const { state } = RRD.useNavigation();
  const submit = RRD.useSubmit();
  const { id } = RRD.useParams();

  const handleSubmit = React.useCallback(
    (formData: TFormEventData) => {
      submit(formData, { method: 'PUT' });
    },
    [submit],
  );

  const handleClose = React.useCallback(() => {
    navigate('../');
  }, [navigate]);

  const queryResults = RQ.useQuery<TEvent, TCustomError>({
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

// Update event details
export async function action(args: RRD.ActionFunctionArgs<{ id: string }>) {
  const { request, params } = args;
  const { id } = params;
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await httpUtils.updateEvent({ id, event: updatedEventData });
  await httpUtils.queryClient.invalidateQueries({ queryKey: ['events'] });
  return RRD.redirect('../');
}

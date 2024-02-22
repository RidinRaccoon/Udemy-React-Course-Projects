/* eslint-disable react/jsx-no-bind */
// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as RRD from 'react-router-dom';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components
import { Header } from '../Header';
import { ErrorBlock, Modal } from '../UI';

export function EventDetails() {
  const [isDeleting, setIsDeleting] = React.useState(false);
  const navigate = RRD.useNavigate();
  const { id } = RRD.useParams();

  // Get Event Details
  const queryResults = RQ.useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => httpUtils.fetchEvent({ signal, id }),
  });

  const {
    data: eventDetails,
    isPending: isPendingDetails,
    isError: isErrorDetails,
    error: errorDetails,
  } = queryResults;

  // Event Deletion
  const mutationResults = RQ.useMutation({
    mutationFn: httpUtils.deleteEvent,
    onSuccess: () => {
      httpUtils.queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });
      navigate('/events');
    },
  });
  console.log(isDeleting);
  // TODO: Delete error handling
  const {
    mutate,
    isPending: isPendingDelete,
    isError: isErrorDelete,
    error: errorDelete,
  } = mutationResults;

  function startDeleteHandler() {
    setIsDeleting(true);
  }

  function stopDeleteHandler() {
    setIsDeleting(false);
  }

  function deleteHandler() {
    mutate({ id });

    if (!isErrorDelete) setIsDeleting(false);
  }

  let content;

  if (isPendingDetails) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isErrorDetails) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to load event"
          message={
            errorDetails.info?.message ||
            'Failed to fetch event data. Please try again later.'
          }
        />
      </div>
    );
  }

  if (eventDetails) {
    const formattedDate = new Date(eventDetails.date).toLocaleDateString(
      'en-US',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
    );

    content = (
      <>
        <div className="error-block-container">
          {isErrorDelete && (
            <ErrorBlock
              title="An error has occurred"
              message={
                errorDelete.info?.message ||
                'Failed to delete event. Please try again later.'
              }
            />
          )}
        </div>
        <header>
          <h1>{eventDetails.title}</h1>
          <nav>
            <button
              disabled={isPendingDelete}
              type="button"
              onClick={startDeleteHandler}
            >
              Delete
            </button>
            <RRD.Link to="edit">Edit</RRD.Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img
            src={`http://localhost:3001/${eventDetails.image}`}
            alt={eventDetails.title}
          />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{eventDetails.location}</p>
              <time dateTime={`${eventDetails.date} ${eventDetails.time}`}>
                {`${formattedDate} @ ${eventDetails.time}`}
              </time>
            </div>
            <p id="event-details-description">{eventDetails.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={stopDeleteHandler}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action can&apos;t be
            undone
          </p>
          <div className="form-actions">
            <button
              type="button"
              onClick={stopDeleteHandler}
              className="button-text"
            >
              Cancel
            </button>
            <button type="button" onClick={deleteHandler} className="button">
              {isPendingDelete ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </Modal>
      )}

      <RRD.Outlet />
      <Header>
        <RRD.Link to="/events" className="nav-item">
          View all Events
        </RRD.Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}

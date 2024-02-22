import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../../utils/http';
// Components & Types
import { TEventImage, TFormEventData } from '../../../types';
import { ErrorBlock } from '../../UI';
import { ImagePicker } from './ImagePicker';

export function EventForm(
  props: {
    inputData: any;
    onSubmit: (formData: TFormEventData) => void;
  } & React.PropsWithChildren,
) {
  const { inputData, onSubmit, children } = props;
  const [selectedImage, setSelectedImage] = React.useState(inputData?.image);

  const handleSelectImage = React.useCallback((imgPath: string) => {
    setSelectedImage(imgPath);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const updatedEvent = { ...data, image: selectedImage } as TFormEventData;
    onSubmit(updatedEvent);
  }

  // Get images from backend
  const queryResults = RQ.useQuery<TEventImage[]>({
    queryKey: ['event-images'],
    queryFn: httpUtils.fetchSelectableImages,
  });

  const { data, isPending, isError } = queryResults;

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      <p className="control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ''}
        />
      </p>

      {isPending && <p>Loading selectable images...</p>}
      {isError && (
        <ErrorBlock
          title="Failed to load selectable images"
          message="Please try again later."
        />
      )}
      {data && (
        <div className="control">
          <ImagePicker
            images={data}
            onSelect={handleSelectImage}
            selectedImage={selectedImage}
          />
        </div>
      )}

      <p className="control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ''}
        />
      </p>

      <div className="controls-row">
        <p className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={inputData?.date ?? ''}
          />
        </p>

        <p className="control">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ''}
          />
        </p>
      </div>

      <p className="control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ''}
        />
      </p>

      <div className="form-actions">{children}</div>
    </form>
  );
}

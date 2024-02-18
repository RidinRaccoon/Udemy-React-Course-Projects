// @ts-nocheck
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import * as React from 'react';
import * as RQ from '@tanstack/react-query';
import * as httpUtils from '../../utils/http';
// Components & Types
import { TImage } from '../../types/types';
import { ImagePicker } from '../ImagePicker';
import { ErrorBlock } from '../UI/ErrorBlock';

export function EventForm(
  props: {
    inputData: any;
    onSubmit: (formData) => void;
  } & React.PropsWithChildren,
) {
  const { inputData, onSubmit, children } = props;
  const [selectedImage, setSelectedImage] = React.useState(inputData?.image);

  function handleSelectImage(image: TImage) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit({ ...data, image: selectedImage });
  }

  const queryResults = RQ.useQuery({
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

      <p className="form-actions">{children}</p>
    </form>
  );
}

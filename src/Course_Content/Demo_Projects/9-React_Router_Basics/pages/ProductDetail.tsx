import * as React from 'react';
import * as RRD from 'react-router-dom';

export function ProductDetailsPage() {
  const params = RRD.useParams();
  const { id } = params;

  return (
    <React.StrictMode>
      <h1>Product Details</h1>
      <p>{id}</p>
      <RRD.Link to=".." relative="path">
        Back
      </RRD.Link>
    </React.StrictMode>
  );
}

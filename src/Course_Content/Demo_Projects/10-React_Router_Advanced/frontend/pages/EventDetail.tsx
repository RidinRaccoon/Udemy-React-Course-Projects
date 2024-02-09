import * as React from 'react';
import * as RRD from 'react-router-dom';

export function EventDetailPage() {
  const params = RRD.useParams();
  const { id } = params;

  return <h1>Event ID: {id}</h1>;
}

import * as React from 'react';
import * as RRD from 'react-router-dom';

export function HomePage() {
  return (
    <React.StrictMode>
      <h1>My Home Page</h1>
      <p>
        Go to <RRD.Link to="/products">the list of products</RRD.Link>
      </p>
    </React.StrictMode>
  );
}

/* eslint-disable react/destructuring-assignment */
import React from 'react';

type TErrorBoundaryProps = {
  children: React.ReactNode;
};
type TErrorBoundaryState = {
  hasError: boolean;
};
/** */
export class ErrorBoundary extends React.Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

import React from 'react';

function ErrorBoundary(props: any) {
  if (props.hasError) {
    return (
      <div>
        <h1>Oops!! Something went wrong.</h1>
      </div>
    );
  }
  return props.children;
}

export default ErrorBoundary;

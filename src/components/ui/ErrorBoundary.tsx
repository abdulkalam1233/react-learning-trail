import React from 'react';

function ErrorBoundary(props: any) {
  if (props.hasError) {
    return <div>Failed To load resources</div>;
  }
  return props.children;
}

export default ErrorBoundary;

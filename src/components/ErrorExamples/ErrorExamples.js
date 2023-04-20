import React, { useState } from 'react';
import ErrorExampleChild from '../ErrorExampleChild/ErrorExampleChild';

const ErrorExamples = () => {
  const [error, setError] = useState(false);
  const [showChildExample, setShowChildExample] = useState(true);

  const handleError = () => {
    setError(true);
  }

  const handleHideErrorChild = () => {
    setShowChildExample(false);
  }

  if(error) {
    return new Error('Error!!!');
  }

  return (
    <>
      <h3>ErrorExamples</h3>
      <p>
        <button onClick={handleError}>
          Crush App
        </button>
      </p>

      <p>
        <button onClick={handleHideErrorChild}>
          Hide ErrorExampleChild
        </button>
      </p>

      {showChildExample && <ErrorExampleChild />}
    </>
  )
}

export default ErrorExamples;
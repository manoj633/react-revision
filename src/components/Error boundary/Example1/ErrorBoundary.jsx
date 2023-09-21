import React, { useEffect, useState } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(error);
      setHasError(true);
    };

    // Attach the error handler to the window's error event
    window.addEventListener("error", errorHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // Render a fallback UI when an error occurs
    return <div>Something went wrong. Please try again later.</div>;
  }

  // Render the children normally if no error has occurred
  return children;
}

export default ErrorBoundary;

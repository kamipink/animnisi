const requestTimeout = (callback, delay) => {
  // Set a timeout to simulate a request
  const timeoutId = setTimeout(() => {
    // Clear the timeout to clean up
    clearTimeout(timeoutId);
    // Execute the callback function
    callback();
  }, delay);

  return timeoutId;
};

// Usage
requestTimeout(() => {
  console.log('Request timed out!');
}, 5000); // Set a 5-second timeout

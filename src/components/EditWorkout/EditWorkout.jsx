import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const EditWorkout = () => (
  <div className="container">
    <div>
      <p>This is my edit workout form</p>
      <p>EDIT WORKOUT FORM</p>
    </div>
  </div>
);

export default EditWorkout;
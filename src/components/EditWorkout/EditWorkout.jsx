import React from 'react';
import './EditWorkout.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const EditWorkout = () => (
  <div className="container">
    <div>
      <p>This is my edit workout form</p>
      <p>EDIT WORKOUT FORM</p>

      {/* <section>
      <h2>Logged Workouts</h2>
      <table>
        <thead>
          <tr>
            <th> Date </th>
            <th> Did you workout? </th>
            <th> Workout Rating </th>
            <th> Post Workout Rating </th>
            <th> Alcohol Consumption </th>
            <th> Nutrition Goal Met </th>
            <th> Sleep Goal Met </th>
            <th> Mindfullness or Meditation </th>
            <th> Overall Wellbeing Rating </th>
            <th> Edit </th>
            <th> Delete </th>

          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section> */}

    </div>
    </div>
);

export default EditWorkout;
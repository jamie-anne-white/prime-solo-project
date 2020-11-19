import React, { Component } from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddWorkout extends Component {

  handleClick = () => {
    console.log('submit clicked');

  }

  render () {

    return (
      <>
      <div className="container">
     
     <div>
      
     <input type="date"/>
    </div>

      <div>
        <p>Did you workout today?</p>
          <select name="workout" id="workout">
              <option value="x">Yes</option>
              <option value="y">No</option>
          </select>
        </div>

        <div>
        <p>How did your workout feel today?</p>
        <input type="radio" value="null" label="x"/>
        <input type="radio" value="1" label="x" />
        <input type="radio" value="2" label="x" /> 
        <input type="radio" value="3" label="x" /> 
        <input type="radio" value="4" label="x" />
        <input type="radio" value="5" label="x" /> 
        <input type="radio" value="6" label="x" /> 
        <input type="radio" value="7" label="x" /> 
        <input type="radio" value="8" label="x" />
        <input type="radio" value="9" label="x" />
        <input type="radio" value="10" label="x" />
        </div>

        <div>
        <p>How do you feel now that you've completed your workout?</p>
        <input type="radio" value="null" label="x" />
        <input type="radio" value="1" label="x" />
        <input type="radio" value="2" label="x" /> 
        <input type="radio" value="3" label="x" /> 
        <input type="radio" value="4" label="x" />
        <input type="radio" value="5" label="x" /> 
        <input type="radio" value="6" label="x" /> 
        <input type="radio" value="7" label="x" /> 
        <input type="radio" value="8" label="x" />
        <input type="radio" value="9" label="x" />
        <input type="radio" value="10" label="x" />
        </div>

        <div>
        <p>Did you consume alcohol within 24 hours of this workout?</p>
          <select name="alcohol" id="alcohol">
              <option value="x">Yes</option>
              <option value="y">No</option>
          </select>
        </div>

        <div>
        <p>Have you met your nutrition goals within the past 24 hours of this workout?</p>
          <select name="food" id="food">
              <option value="x">Yes</option>
              <option value="y">No</option>
          </select>
        </div>

        <div>
        <p>Did you meet your sleep goal within the past 24 hours leading up to this workout?</p>
          <select name="sleep" id="sleep">
              <option value="x">Yes</option>
              <option value="y">No</option>
          </select>
        </div>

        <div>
        <p>Have you practiced mindfullness and/or meditation in the past 24 hours?</p>
          <select name="mindfullness" id="mindfullness">
              <option value="x">Yes</option>
              <option value="y">No</option>
          </select>
        </div>

        <div>
        <p>How do you feel overall or holistically today?</p>
        <input type="radio" value="null" label="x" />
        <input type="radio" value="1" label="x" />
        <input type="radio" value="2" label="x" /> 
        <input type="radio" value="3" label="x" /> 
        <input type="radio" value="4" label="x" />
        <input type="radio" value="5" label="x" /> 
        <input type="radio" value="6" label="x" /> 
        <input type="radio" value="7" label="x" /> 
        <input type="radio" value="8" label="x" />
        <input type="radio" value="9" label="x" />
        <input type="radio" value="10" label="x" />
        </div>

        <div>
          <button onClick={this.handleClick}> Submit Workout </button>
        </div>

      </div>

      </>

    )
  }
}

export default AddWorkout;
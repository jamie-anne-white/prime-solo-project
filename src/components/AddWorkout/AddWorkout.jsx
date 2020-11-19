import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddWorkout extends Component {

  state = {
    addResult: { 
      user_id: 1,
      // date: '',
      workout: true,
      workout_rating: 0,
      post_workout_rating: 0,
      alcohol: true,
      food: true,
      sleep: true,
      mindfullness: true,
      overall_status: 0

  }
  }

  handleClick = () => {
    console.log('submit clicked', this.state.addResult);
    this.props.dispatch({type: "ADD_RESULTS", payload: this.state.addResult});
    // this.props.dispatch({type: "GET_RESULTS"});

  }

  handleChange = (event, propertyName) => {
    this.setState({
        addResult:{
      ...this.state.addResult,
      [propertyName]: event.target.value,
      }
    })
  }


  render () {

    return (
      <>
      <div className="container">
      {/* <form onClick={this.addResult}> */}

     <div>
     <input type="date"/>
    </div>

      <div>
        <p>Did you workout today?</p>
          <select name="workout" id="workout">
              <option value="1">Yes</option>
              <option value="2">No</option>
          </select>
        </div>

        <div>
        <p>How did your workout feel today?</p>
        <input type="radio" value="null" label="workout_rating"/>
        <input type="radio" value="1" label="workout_rating" />
        <input type="radio" value="2" label="workout_rating" /> 
        <input type="radio" value="3" label="workout_rating" /> 
        <input type="radio" value="4" label="workout_rating" />
        <input type="radio" value="5" label="workout_rating" /> 
        <input type="radio" value="6" label="workout_rating" /> 
        <input type="radio" value="7" label="workout_rating" /> 
        <input type="radio" value="8" label="workout_rating" />
        <input type="radio" value="9" label="workout_rating" />
        <input type="radio" value="10" label="workout_rating" />
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

        {/* </form> */}

      </div>

      </>

    )
  }
}

export default connect(mapStoreToProps)(AddWorkout);

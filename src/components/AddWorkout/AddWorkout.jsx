import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddWorkout extends Component {

  state = {
    addResult: { 
      user_id: 1,
      // date: '',
      workout: '',
      workout_rating: 0,
      post_workout_rating: 0,
      alcohol: 'Yes',
      food: 'Yes',
      sleep: 'Yes',
      mindfullness: 'Yes',
      overall_status: 0

      

  }
  }

  addNewWorkout= (event) => {
    console.log('submit clicked', this.state.addResult);
    // event.preventDefault();
    this.props.dispatch({type: "ADD_RESULTS", payload: this.state.addResult});
    this.props.dispatch({type: "GET_RESULTS"});
    // this.setState({
    //   user_id: 1,
    //   // date: '',
    //   workout: '',
    //   workout_rating: 0,
    //   post_workout_rating: 0,
    //   alcohol: '',
    //   food: '',
    //   sleep: '',
    //   mindfullness: '',
    //   overall_status: 0

    // })

  }

  handleChange = (event, propertyName) => {
    this.setState({
        addResult:{
      ...this.state.addResult,
      [propertyName]: event.target.value,
      }
    })
  }

  // handleOptionChange = () => {
  //   if (document.getElementById('completedStatus').checked)
  //   {
  //   this.setState({
  //     workout: {
  //     selectedOption: changeEvent.target.value
  //     is_complete: document.getElementById('completedStatus').value= "yes"
  //   }
  //   });
  // };

  // console.log('completed status', this.state.workout.is_complete);


  render () {

    return (
      <>
    <div className="container">
      
    <form onSubmit={this.addNewWorkout}>

    <div>
     <input type="date"/>
    </div>

      <div>
        <p>Did you workout today?</p>
          <select required name="workout" id="workout" onChange={this.handleChange} >
              <option value=''> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>

        <div>
        <p>How did your workout feel today?</p>
        
        {/* <FormControl component="fieldset" onChange={(event => this.setState({workout_rating: event.target.value}))}>
        <RadioGroup>
        <FormControlLabel value="1" control={<Radio />} label="1" />


        </RadioGroup>
        </FormControl> */}

        <input type="radio" value="0" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>
        <input type="radio" value="1" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>
        <input type="radio" value="2" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/> 
        <input type="radio" value="3" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/> 
        <input type="radio" value="4" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>
        <input type="radio" value="5" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/> 
        
        </div>


        <div>
        <p>How do you feel now that you've completed your workout?</p>
        <input type="radio" value="1" label="post_workout_rating"  onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>
        <input type="radio" value="1" label="post_workout_rating"  onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>
        <input type="radio" value="2" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/> 
        <input type="radio" value="3" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/> 
        <input type="radio" value="4" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>
        <input type="radio" value="5" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/> 
        </div>

        <div>
        <p>Did you consume alcohol within 24 hours of this workout?</p>
          <select required name="alcohol" id="alcohol" onChange={(event) => this.handleChange(event, 'alcohol')}>
              <option value=''> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>

          </select>
        </div>

        <div>
        <p>Have you met your nutrition goals within the past 24 hours of this workout?</p>
          <select required name="food" id="food" onChange={(event) => this.handleChange(event, 'food')}>
              <option value=''> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>

        <div>
        <p>Did you meet your sleep goal within the past 24 hours leading up to this workout?</p>
          <select required name="sleep" id="sleep" onChange={(event) => this.handleChange(event, 'sleep')}>
              <option value=''> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>

        <div>
        <p>Have you practiced mindfullness and/or meditation in the past 24 hours?</p>
              <select required name="mindfullness" id="mindfullness" onChange={(event) => this.handleChange(event, 'mindfullness')}>
              <option value=''> -- select an option -- </option>
  v           <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>

        <div>
        <p>How do you feel overall or holistically today?</p>
        <input type="radio" value="1" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')} />
        <input type="radio" value="2" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 
        <input type="radio" value="3" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 
        <input type="radio" value="4" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/>
        <input type="radio" value="5" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 
        <input type="radio" value="6" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 

        </div>

        <div>
          <button type='submit'> Submit Workout </button>
        </div>

        </form>

      </div>

      </>

    )
  }
}

export default connect(mapStoreToProps)(AddWorkout);

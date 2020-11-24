import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './AddWorkout.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import Select from '@material-ui/core/Select';
import swal from 'sweetalert';







// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddWorkout extends Component {

  state = {
    addResult: { 
      user_id: this.props.store.user_id,
      date: null,
      workout: '',
      workout_rating: 0,
      post_workout_rating: 0,
      alcohol: '',
      food: '',
      sleep: '',
      mindfullness: '',
      overall_status: 0
  },
  viewSubmit: false

  }

  addNewWorkout= (event) => {
    console.log('submit clicked', this.state.addResult);
    // event.preventDefault();
    this.props.dispatch({type: "ADD_RESULTS", payload: this.state.addResult});
    this.props.dispatch({type: "GET_RESULTS"});
    swal({
      title: "Thank you!",
      text: "Your workout has been saved!",
      icon: "success",
    });

    this.props.history.push('/')

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
     <TextField
     id="date"
     label="Workout Date"
     type="date"
     defaultValue="2020-12-01"
     InputLabelProps={{
       shrink:true,
     }}
     onChange={(event) => this.handleChange(event, 'date') }
     />
    </div>

      <div>
        <p>Did you workout today?</p>
          <select required name="workout" id="workout" onChange={(event) => this.handleChange(event,'workout')} >
              <option value=''> -- select an option -- </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
          </select>
        </div>

        <div>
        <p>How did your workout feel today?</p>
        
       <FormControl component="fieldset" onChange={(event => this.setState({workout_rating: event.target.value}))}>
        <RadioGroup row>
        <FormControlLabel value="1" control={<Radio />} onChange={(event) => this.handleChange(event, 'workout_rating')} label="1" />
        <FormControlLabel value="2" control={<Radio />} onChange={(event) => this.handleChange(event, 'workout_rating')} label="2" />
        <FormControlLabel value="3" control={<Radio />} onChange={(event) => this.handleChange(event, 'workout_rating')} label="3" />
        <FormControlLabel value="4" control={<Radio />} onChange={(event) => this.handleChange(event, 'workout_rating')} label="4" />
        <FormControlLabel value="5" control={<Radio />} onChange={(event) => this.handleChange(event, 'workout_rating')} label="5" />
        <FormControlLabel value="6" control={<Radio />} onChange={(event) => this.handleChange(event, 'workout_rating')} label="6" />
        </RadioGroup>
        </FormControl>

        {/* <input type="radio" value="0" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>
        <input type="radio" value="1" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>
        <input type="radio" value="2" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/> 
        <input type="radio" value="3" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/> 
        <input type="radio" value="4" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>
        <input type="radio" value="5" label="workout_rating" onChange={(event) => this.handleChange(event, 'workout_rating')}/>  */}
        
        </div>


        <div>
        <p>How do you feel now that you've completed your workout?</p>



        <FormControl component="fieldset" onChange={(event => this.setState({post_workout_rating: event.target.value}))}>
        <RadioGroup row>
        <FormControlLabel value="1" control={<Radio />} onChange={(event) => this.handleChange(event, 'post_workout_rating')} label="1" />
        <FormControlLabel value="2" control={<Radio />} onChange={(event) => this.handleChange(event, 'post_workout_rating')} label="2" />
        <FormControlLabel value="3" control={<Radio />} onChange={(event) => this.handleChange(event, 'post_workout_rating')} label="3" />
        <FormControlLabel value="4" control={<Radio />} onChange={(event) => this.handleChange(event, 'post_workout_rating')} label="4" />
        <FormControlLabel value="5" control={<Radio />} onChange={(event) => this.handleChange(event, 'post_workout_rating')} label="5" />
        <FormControlLabel value="6" control={<Radio />} onChange={(event) => this.handleChange(event, 'post_workout_rating')} label="6" />
        </RadioGroup>
        </FormControl>

        {/* <input type="radio" value="1" label="post_workout_rating"  onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>
        <input type="radio" value="1" label="post_workout_rating"  onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>
        <input type="radio" value="2" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/> 
        <input type="radio" value="3" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/> 
        <input type="radio" value="4" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>
        <input type="radio" value="5" label="post_workout_rating" onChange={(event) => this.handleChange(event, 'post_workout_rating')}/>  */}

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

        <FormControl component="fieldset" onChange={(event => this.setState({overall_status: event.target.value}))}>
        <RadioGroup row>
        <FormControlLabel value="1" control={<Radio />} onChange={(event) => this.handleChange(event, 'overall_status')} label="1" size="small"/>
        <FormControlLabel value="2" control={<Radio />} onChange={(event) => this.handleChange(event, 'overall_status')} label="2" />
        <FormControlLabel value="3" control={<Radio />} onChange={(event) => this.handleChange(event, 'overall_status')} label="3" />
        <FormControlLabel value="4" control={<Radio />} onChange={(event) => this.handleChange(event, 'overall_status')} label="4" />
        <FormControlLabel value="5" control={<Radio />} onChange={(event) => this.handleChange(event, 'overall_status')} label="5" />
        <FormControlLabel value="6" control={<Radio />} onChange={(event) => this.handleChange(event, 'overall_status')} label="6" />
        </RadioGroup>
        </FormControl>

        {/* <input type="radio" value="1" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')} />
        <input type="radio" value="2" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 
        <input type="radio" value="3" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 
        <input type="radio" value="4" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/>
        <input type="radio" value="5" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/> 
        <input type="radio" value="6" label="overall_status" onChange={(event) => this.handleChange(event, 'overall_status')}/>  */}

        </div>

        <div>
          <Button variant="contained" type='submit' > Submit Workout </Button>
        </div>

        </form>

      </div>

      </>

    )
  }
}

export default connect(mapStoreToProps)(AddWorkout);

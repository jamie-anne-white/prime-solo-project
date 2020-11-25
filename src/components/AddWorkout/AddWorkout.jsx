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

import MenuItem from '@material-ui/core/MenuItem';








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
     required name = "date"
     label="Workout Date"
     type="date"
     value={this.props.store.date}
     InputLabelProps={{
       shrink:true,
     }}
     onChange={(event) => this.handleChange(event, 'date') }
     />
    </div>

    <div>
    <p>Did you workout today?</p>
      <TextField
        id="workout"
        select
        label="Select"
        value={this.props.store.workout}
        onChange={(event) => this.handleChange(event, 'workout')}
        helperText="Please select an option"
        variant="filled"
        size="small"
        required name = "workout"
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>

        </TextField>
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
      </div>

        <div>
          <p>Did you consume alcohol within 24 hours of this workout?</p>
            <TextField
              id="alcohol"
              select
              label="Select"
              value={this.props.store.alcohol}
              onChange={(event) => this.handleChange(event, 'alcohol')}
              helperText="Please select an option"
              variant="filled"
              size="small"
              required name = "alcohol"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
            </TextField>

        </div>

        <div>
          <p>Have you met your nutrition goals within the past 24 hours of this workout?</p>
            <TextField
              id="food"
              select
              label="Select"
              value={this.props.store.food}
              onChange={(event) => this.handleChange(event, 'food')}
              helperText="Please select an option"
              variant="filled"
              size="small"
              required name = "food"

              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
            </TextField>

        </div>

        <div>
          <p>Have you met your sleep goals within the past 24 hours of this workout?</p>

            <TextField
              id="sleep"
              select
              label="Select"
              value={this.props.store.sleep}
              onChange={(event) => this.handleChange(event, 'sleep')}
              helperText="Please select an option"
              variant="filled"
              size="small"
              required name = "sleep"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>

            </TextField>

        </div>

        <div>
          <p>Have you met your nutrition goals within the past 24 hours of this workout?</p>
            <TextField
              id="mindfullness"
              select
              label="Select"
              value={this.props.store.mindfullness}
              onChange={(event) => this.handleChange(event, 'mindfullness')}
              helperText="Please select an option"
              variant="filled"
              size="small"
              required name = "mindfullness"

              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>

            </TextField>

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

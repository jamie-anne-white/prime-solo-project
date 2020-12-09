import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField, Button, MenuItem, Paper, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';






import swal from 'sweetalert';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class EditWorkout extends Component {
state = {
  date: 'null',
  workout: '',
  workout_rating: 0,
  post_workout_rating: 0,
  alcohol: '',
  food: '',
  sleep: '',
  mindfullness: '',
  overall_status: 0,
  user_id: 0,
  id: 0
}
  


  componentDidMount() {
    console.log('in Edit');
    this.props.dispatch({type: `GET_RESULTS`, payload: this.props.match.params})
    if (this.props.store.edit[0].user_id !== this.state.user_id) {
      this.setState({
        ...this.props.store.edit[0]
      }) 
  }
}

  componentDidUpdate() {
    console.log(this.props.store.edit);
    if (this.props.store.edit[0].user_id !== this.state.user_id) {
      this.setState({
        ...this.props.store.edit[0]
      })
    }
  }

  handleChange = (event, propertyName) => {
    event.preventDefault();
    // console.log('edit workout', this.state);
    this.setState({
        ...this.state,
        [propertyName]: event.target.value,

    })
}


  
  // addWorkout(workout) {
  //   this.setState({
  //     ...workout,
  //   })
  // }

  handleSave = () => {
    console.log('this clicks', this.state, this);
    this.props.dispatch({type: `EDIT_RESULTS`, payload: this.state})
    
    
    swal({
      title: "Your workout has been updated!",
      icon: "success",
    });
    this.props.history.push('/')
  }

  render () {

    return (
      <>
      {this.props.store.edit.map((results) => {
        // this.addWorkout(results)

        return(
          <Paper id="paperEdit" key={results.user_id}>
            <h1>Edit Workout</h1>

            <div>
              <TextField
                id="editDateSelect"
                label="Workout Date"
                type="date"
                value={results.date}
                InputLabelProps={{
                  shrink:true,
                }}
                onChange={(event) => this.handleChange(event, 'date') }
                />
            </div>

          

        
            <div classname="editWorkout">
              <p>Did you workout today?</p>

              <TextField
                id="editWorkoutSelect"
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

            <div className="addWorkoutRating">
                        <FormControl 
                            component="fieldset"
                            onChange={(event => this.setState({workout_rating: event.target.value}))}>
                            <p>
                                How did your workout feel today?</p>
                            <RadioGroup row>
                                <FormControlLabel
                                    value="1"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'workout_rating')}
                                    label="1"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="2"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'workout_rating')}
                                    label="2"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="3"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'workout_rating')}
                                    label="3"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="4"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'workout_rating')}
                                    label="4"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="5"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'workout_rating')}
                                    label="5"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="6"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'workout_rating')}
                                    label="6"
                                    labelPlacement="bottom"/>
                            </RadioGroup>
                        </FormControl>
                    </div>


            <div className="addPostWorkoutRating">
                        <FormControl
                            component="fieldset"
                            onChange={(event => this.setState({post_workout_rating: event.target.value}))}>
                            <p>
                                How do you feel after working out? Or, how do you feel not having worked out?</p>
                            <RadioGroup row>
                                <FormControlLabel
                                    value="1"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'post_workout_rating')}
                                    label="1"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="2"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'post_workout_rating')}
                                    label="2"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="3"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'post_workout_rating')}
                                    label="3"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="4"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'post_workout_rating')}
                                    label="4"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="5"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'post_workout_rating')}
                                    label="5"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="6"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'post_workout_rating')}
                                    label="6"
                                    labelPlacement="bottom"/>
                            </RadioGroup>
                        </FormControl>
                    </div>

            <div>
          <p>Have you consumed alcohol within the past 24 hours?</p>
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
                <MenuItem value="Somewhat">Somewhat</MenuItem>
            </TextField>

        </div>

        <div>
          <p>Have you met your sleep goals within the past 24 hours?</p>

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
                <MenuItem value="Somewhat">Sometimes</MenuItem>


            </TextField>

        </div>


        <div>
          <p>Did you practice meditation or wellness today?</p>
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
                <MenuItem value="Somewhat">Sometimes</MenuItem>


            </TextField>

        </div>

            <div>
              <div className="addOverall">
                        <FormControl
                            component="fieldset"
                            onChange={(event => this.setState({overall_status: event.target.value}))}>
                            <p>How do you feel overall or holistically today?</p>
                            <RadioGroup row className>
                                <FormControlLabel
                                    value="1"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="1"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="2"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="2"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="3"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="3"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="4"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="4"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="5"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="5"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="6"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="6"
                                    labelPlacement="bottom"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
            </div>
            
            
            
            
            <Button className="saveButton" onClick ={this.handleSave}> Save </Button>
          
          </Paper>

        
        )
       
        })}


</>
 
    )
  }
}





export default connect(mapStoreToProps)(EditWorkout);
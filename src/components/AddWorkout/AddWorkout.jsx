import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './AddWorkout.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Paper} from '@material-ui/core';







// import FormHelperText from '@material-ui/core/FormHelperText'; import Select
// from '@material-ui/core/Select';

import swal from 'sweetalert';
import MenuItem from '@material-ui/core/MenuItem';


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

    addNewWorkout = (event) => {
        // console.log('submit clicked', this.state.addResult);
        event.preventDefault();
        this
            .props
            .dispatch({type: "ADD_RESULTS", payload: this.state.addResult});
        this
            .props
            .dispatch({type: "GET_RESULTS"});

        swal({title: "Thank you!", text: "Your workout has been saved!", icon: "success"});

        this
            .props
            .history
            .push('/')

    }

    handleChange = (event, propertyName) => {
        this.setState({
            addResult: {
                ...this.state.addResult,
                [propertyName]: event.target.value
            }
        })
    }

    // handleOptionChange = () => {   if
    // (document.getElementById('completedStatus').checked)   {   this.setState({
    //  workout: {     selectedOption: changeEvent.target.value     is_complete:
    // document.getElementById('completedStatus').value= "yes"   }   }); };
    // console.log('completed status', this.state.workout.is_complete);

    render() {

        return (

            <form onSubmit={this.addNewWorkout}>

                <Paper id="paperAdd">
                    <h1>Add a New Day</h1>

                    <div>
                        <TextField
                            id="addDateSelect"
                            required
                            name="date"
                            label="Workout Date"
                            type="date"
                            value={this.props.store.date}
                            InputLabelProps={{
                            shrink: true
                        }}
                            onChange={(event) => this.handleChange(event, 'date')}/>
                    </div>

                    <div className="addWorkout">
                        <p>Did you workout today?</p>
                        <TextField
                            id="addWorkoutSelect"
                            select
                            label="Select"
                            value={this.props.store.workout}
                            onChange={(event) => this.handleChange(event, 'workout')}
                            helperText="Please select an option"
                            variant="filled"
                            size="small"
                            required
                            name="workout">
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

                    <div classname="addAlcohol">
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
                            required
                            name="alcohol">
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </TextField>

                    </div>

                    <div className="addFood">
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
                            required
                            name="food">
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="Somewhat">Somewhat</MenuItem>

                        </TextField>

                    </div>

                    <div className="addSleep">
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
                            required
                            name="sleep">
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                            <MenuItem value="Somewhat">Somewhat</MenuItem>

                        </TextField>

                    </div>

                    <div className="addMindfullness">
                        <FormControl>
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
                                required
                                name="mindfullness">
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                                <MenuItem value="Somewhat">Somewhat</MenuItem>

                            </TextField>
                        </FormControl>

                    </div>

                    <div className="addOverall">
                        <FormControl
                            component="fieldset"
                            onChange={(event => this.setState({overall_status: event.target.value}))}>
                            <p>How do you feel overall today?</p>
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
                                    label="4"
                                    labelPlacement="bottom"/>
                                <FormControlLabel
                                    value="6"
                                    control={< Radio />}
                                    onChange={(event) => this.handleChange(event, 'overall_status')}
                                    label="5"
                                    labelPlacement="bottom"/>
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <Button variant="contained" type='submit' className="submitWorkout">
                            Submit Workout
                        </Button>
                    </div>

                </Paper>

            </form>

        )
    }
}

export default connect(mapStoreToProps)(AddWorkout);

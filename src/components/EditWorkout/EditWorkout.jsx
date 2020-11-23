import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';



import './EditWorkout.css';
import swal from 'sweetalert';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class EditWorkout extends Component {
state = {
  workout: '',
  workout_rating: 0,
  post_workout_rating: 0,
  alcohol: '',
  food: '',
  sleep: '',
  mindfullness: '',
  overall_status: '',
  user_id: 0,
  id: 0
}
  


  componentDidMount() {
    console.log('in Edit');
    this.props.dispatch({type: `GET_RESULTS`, payload: this.props.match.params})
    // GET RESULTS ID
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
      <div className="container">
      <div>

        <p>EDIT WORKOUT FORM</p>
        {/* {JSON.stringify(this.props.store.edit)} */}
        <section>
        <table className="edit-table">
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
              <th>Save Workout</th>
  
            </tr>
          </thead>
          <tbody>

      {this.props.store.edit.map((results) => {
        // this.addWorkout(results)

        return(
          <tr key={results.user_id}>
            <td></td>

            <td>
              <select name="workout" id="workout" defaultValue={results.workout} onChange={(event) => this.handleChange(event, 'workout')}>
                <option value=''> -- select an option -- </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>

            <td><input type="number" min="1" max="6" defaultValue={results.workout_rating} onChange={(event) => this.handleChange(event, 'workout_rating')} /> </td>

            <td><input type="number" min="1" max="6" defaultValue={results.post_workout_rating} onChange={(event) => this.handleChange(event, 'post_workout_rating')} /> </td>
            
            <td>
            <select name="alcohol" id="alcohol" defaultValue={results.alcohol} onChange={(event) => this.handleChange(event, 'alcohol')}>
            <option value=''> -- select an option -- </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            </td>


            <td>
              <select name="food" id="food" defaultValue={results.food} onChange={(event) => this.handleChange(event, 'food')}>
                <option value=''> -- select an option -- </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>

            <td>
              <select name="sleep" id="sleep" defaultValue={results.sleep} onChange={(event) => this.handleChange(event, 'sleep')}>
                <option value=''> -- select an option -- </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>

            <td>
              <select name="mindfullness" id="mindfullness" defaultValue={results.mindfullness} onChange={(event) => this.handleChange(event, 'mindfullness')}>
                <option value=''> -- select an option -- </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>

            <td><input type="number" min="1" max="6" defaultValue={results.overall_status} onChange={(event) => this.handleChange(event, 'overall_status')}  /> </td>
            
            
            
            
            
            <td><Button onClick ={this.handleSave}> Save </Button></td>
          </tr>

        )
       
      })}

      </tbody>
        </table>
        </section>
  
      </div>
      </div>

    )
  }
}





export default connect(mapStoreToProps)(EditWorkout);
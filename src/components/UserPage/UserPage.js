import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

// import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;








class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  

  componentDidMount () {
    console.log(this.props);
    this.getResults();

  }

  componentDidUpdate () {
    
  }

  handleClick = () => {
    console.log('clicked buttons in results');
  }
  getResults = () => {
    this.props.dispatch({type: "FETCH_RESULTS"})
  }

  delete = (results) => {
    console.log('deleted', results.id);
    this.props.dispatch({type: "DELETE_RESULTS", payload: results.id})
    swal({
      title: "Are you sure?",
      text: "this cannot be undone!", 
      icon: "warning",
      buttons: true,
      dangerMode: true})
      .then((willDelete) => {
        if (willDelete) {
          swal("Your workout has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your workout is safe!")
        }
      })
  }

  render() {


    return (
      <>
     
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Did you workout?</th>
            <th>Workout Rating</th>
            <th>Post Workout Rating</th>
            <th>Alcohol Consumption</th>
            <th>Nutrition Goal Met</th>
            <th>Sleep Goal Met</th>
            <th>Mindfullness or Meditation</th>
            <th>Overall Wellbeing Rating</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {this.props.store.results.map(results=>(
            <tr key={results.id}>
              <td className="date">{results.date}</td>


              {results.workout === "Yes" ?  
              <td className="workout_yes">{results.workout}</td>
              :
              <td className="workout_no">{results.workout}</td>
              }


              <td className="workout_rating">{results.workout_rating}</td>


              <td className="post_workout_rating">{results.post_workout_rating}</td>

              {/* {results.post_workout_rating === 1 || 2 || 3 ?  
              <td className="post_workout_rating_low">{results.post_workout_rating}</td>
              :
              <td className="alcohol_no">{results.alcohol}</td>
              } */}

              {results.alcohol === "Yes" ?  
              <td className="alcohol_yes">{results.alcohol}</td>
              :
              <td className="alcohol_no">{results.alcohol}</td>
              }

              {results.food === "Yes" ?  
              <td className="food_yes">{results.food}</td>
              :
              <td className="food_no">{results.food}</td>
              }


              {results.sleep === "Yes" ?
              <td className="sleep_yes">{results.sleep}</td>
              :
              <td className="sleep_no">{results.sleep}</td>
              }

              {results.mindfullness === "Yes" ?
              <td className="mindfullness_yes">{results.mindfullness}</td>
              :
              <td className="mindfullness_no">{results.mindfullness}</td>

              }

 
              <td className="overall_status">{results.overall_status}</td>


              <td><Button variant="contained" color="primary" onClick={() => this.props.history.push(`/edit/${results.id}`)}>Edit</Button></td>
              

              <td><Button variant="contained" color="secondary" onClick={()=> this.delete(results)}>Delete</Button></td>


            </tr>


          ))}
           
         


          </tbody> 
      </table>  



    {/* <Button variant="contained" color="secondary">Delete all Workouts</Button> */}

      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';

//adding in sweet alerts
import swal from 'sweetalert';





class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM


  componentDidMount () {
    console.log(this.props);
    this.getResults();
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


  // resultsAreYes = (props) => {
  //   const answeredYes = props.answeredYes;
  //   if (answeredYes) {
  //     return 'X';
  //   }
  //     return '';


  // }

  render() {
    return (
      <>
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
      </div>

      <section>
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
            <tr key={results.user_id}>
              {results.user_id=== this.props.store.user.id ?
              <td className="date">{results.date}</td>
              :
              <td></td>

              }

              {results.user_id === this.props.store.user.id ?
              <td className="workout">{results.workout}</td>
              :
              <td></td>

              }

              {results.user_id === this.props.store.user.id ?
              <td className="workout_rating">{results.workout_rating}</td>
              :
              <td></td>
              }

              {results.user_id=== this.props.store.user.id ?
              <td className="post_workout_rating">{results.post_workout_rating}</td>
              :
              <td></td>
              }

              {results.user_id === this.props.store.user.id ?
              <td className="alcohol">{results.alcohol}</td>
              :
              <td></td>
              }
              {results.user_id === this.props.store.user.id ?
              <td className="food">{results.food}</td>
              :
              <td></td>
              }

              {results.user_id === this.props.store.user.id ?
              <td className="sleep">{results.sleep}</td>
              :
              <td></td>
              } 

              {results.user_id === this.props.store.user.id ?
              <td className="mindfullness">{results.mindfullness}</td>
              :
              <td></td>
              } 

              {results.user_id === this.props.store.user.id ?
              <td className="overall_status">{results.overall_status}</td>
              :
              <td></td>
              } 

              {results.user_id === this.props.store.user.id ?
              <td><Button variant="contained" color="primary" onClick={() => this.props.history.push(`/edit/${results.id}`)}>Edit</Button></td>

              :
              <td></td>
              }
              
              {results.user_id === this.props.store.user.id ? 
              <td><Button variant="contained" color="secondary" onClick={()=> this.delete(results)}>Delete</Button></td>
              :
              <td></td>
              }


            </tr>


          ))}
           
         


          </tbody> 
      </table>  
    </section> 

    {/* <Button variant="contained" color="secondary">Delete all Workouts</Button> */}


        {/* currently have the logout button deleted from the user page */}
        {/* <LogOutButton className="log-in" /> */}
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

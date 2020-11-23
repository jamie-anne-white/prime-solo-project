import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
            <tr key={results.id}>
              <td>{results.date}</td>
              <td>{results.workout}</td>
              <td>{results.workout_rating}</td>
              <td>{results.post_workout_rating}</td>
              <td>{results.alcohol}</td>
              <td>{results.food}</td>
              <td>{results.sleep}</td>
              <td>{results.mindfullness}</td>
              <td>{results.overall_status}</td>

              {/* need to set up edit to link to edit page */}
              {/* need to set up delete router, etc */}

              <td><button onClick={() => this.props.history.push(`/edit/${results.id}`)}>Edit</button></td>
              
                <td><button onClick={()=> this.delete(results)}>Delete</button></td>            


            </tr>



          ))}
           
         


          </tbody> 
      </table>  
    </section> 

        {/* currently have the logout button deleted from the user page */}
        {/* <LogOutButton className="log-in" /> */}
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
// import swal from 'sweetalert';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  


  componentDidMount () {
    console.log(this.props);
    this.getResults();
  }

  componentDidUpdate () {  
  }

  handleClick = () => {
    console.log('clicked buttons in results', this.props.store.results.id);
  }
  getResults = () => {
    this.props.dispatch({type: "FETCH_RESULTS"})
  }

  delete = (results) => {
    console.log('deleted', results.id, results.user_id);
    this.props.dispatch({type: "DELETE_RESULTS", payload: {resultsId: results.id, userId: results.user_id}})
    
    
    // swal({
    //   title: "Are you sure?",
    //   text: "this cannot be undone!", 
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true})
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Your workout has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your workout is safe!")
    //     }
    //   })
  }

  render() {


    return (
     <>
      {/* <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
      </div> */}

      
      <TableContainer className="resultsTableContainer">
      <Paper className="resultsPaper">
        <h1>Logged Days</h1>
      <Table aria-label="results_table" id="resultsTable">
      <TableHead className="resultsTableHead">
          <TableRow className="resultsTableRow">
          <TableCell className="resultsTableCell" align="center">Date</TableCell>
          <TableCell align="center">Did you workout?</TableCell>
          <TableCell align="center">Workout Rating</TableCell>
          <TableCell align="center">Post Workout Rating</TableCell>
          <TableCell align="center">Alcohol Consumption</TableCell>
          <TableCell align="center">Nutrition Goal Met</TableCell>
          <TableCell align="center">Sleep Goal Met</TableCell>
          <TableCell align="center">Mindfullness or Meditation</TableCell>
          <TableCell align="center">Overall Wellbeing</TableCell>
          <TableCell align="center">Edit</TableCell>
          <TableCell align="center">Delete</TableCell>
          </TableRow>
          </TableHead>
          <TableBody className="resultsTableBody">
            {this.props.store.results.map(results => (
            <TableRow key={results.id}>

              <TableCell align="center">{results.date.slice(5,7) + '/' + results.date.slice(8,10) + '/' + results.date.slice(0,4)}</TableCell>

              
                {results.workout === "Yes" ?               
                <TableCell align="center" className="workout_yes" >{results.workout}</TableCell>
                :
                <TableCell align="center" className="workout_no" >{results.workout}</TableCell>
                }
              

             
                {(results.workout_rating === 1 || results.workout_rating === 2) &&
                  <TableCell align="center" className="workout_rating_min">{results.workout_rating}</TableCell>
                } 
                {(results.workout_rating === 3 || results.workout_rating === 4)  &&
                  <TableCell align="center" className="workout_rating_mid">{results.workout_rating}</TableCell>
                }
                {(results.workout_rating === 5 || results.workout_rating === 6)  &&
                  <TableCell align="center" className="workout_rating_max">{results.workout_rating}</TableCell>
                }

                {(results.post_workout_rating === 1 || results.post_workout_rating === 2) &&
                  <TableCell align="center" className="post_workout_rating_min">{results.post_workout_rating}</TableCell>
                } 
                {(results.post_workout_rating === 3 || results.post_workout_rating === 4)  &&
                  <TableCell align="center" className="post_workout_rating_mid">{results.post_workout_rating}</TableCell>
                }
                {(results.post_workout_rating === 5 || results.post_workout_rating === 6)  &&
                  <TableCell align="center" className="post_workout_rating_max">{results.post_workout_rating}</TableCell>
                }
                


              {results.alcohol === "Yes" ?               
              <TableCell align="center" className="alcohol_yes" >{results.alcohol}</TableCell>
              :
              <TableCell align="center" className="alcohol_no" >{results.alcohol}</TableCell>
              }


              {results.food === "Yes" &&               
              <TableCell align="center" className="food_yes" >{results.food}</TableCell>
              }
              {results.food === "No" && 
              <TableCell align="center" className="food_no" >{results.food}</TableCell>
              }
              {results.food === "Somewhat" && 
              <TableCell align="center" className="food_somewhat" >{results.food}</TableCell>
              }


              {results.sleep === "Yes" &&               
              <TableCell align="center" className="sleep_yes" >{results.sleep}</TableCell>
              }
              {results.sleep === "No" && 
              <TableCell align="center" className="sleep_no" >{results.sleep}</TableCell>
              }
              {results.sleep === "Somewhat" && 
              <TableCell align="center" className="sleep_somewhat" >{results.sleep}</TableCell>
              }

              {results.mindfullness === "Yes" &&               
              <TableCell align="center" className="mindfullness_yes" >{results.mindfullness}</TableCell>
              }
              {results.mindfullness === "No" && 
              <TableCell align="center" className="mindfullness_no" >{results.mindfullness}</TableCell>
              }
              {results.mindfullness === "Somewhat" && 
              <TableCell align="center" className="mindfullness_somewhat" >{results.mindfullness}</TableCell>
              }


                {(results.overall_status === 1 || results.overall_status === 2) &&
                  <TableCell align="center" className="overall_status_min">{results.overall_status}</TableCell>
                } 
                {(results.overall_status === 3 || results.overall_status === 4)  &&
                  <TableCell align="center" className="overall_status_mid">{results.overall_status}</TableCell>
                }
                {(results.overall_status === 5 || results.overall_status === 6)  &&
                  <TableCell align="center" className="overall_status_max">{results.overall_status}</TableCell>
                }




              <TableCell align="center"><Button variant="contained" color="primary" onClick={() => this.props.history.push(`/edit/${results.id}`)}>Edit</Button></TableCell>
              <TableCell align="center">
              <Button variant="contained" color="secondary" onClick={()=> this.delete(results)}>Delete</Button>
              </TableCell>


            </TableRow>
            
            ))}
            </TableBody>
      </Table>
      </Paper>
    </TableContainer>





    {/* <Button variant="contained" color="secondary">Delete all Workouts</Button> */}

    </>

    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Paper from '@material-ui/core/Paper';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';





import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: ``
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <Paper className="landing_paper">
            <img src="https://senkofuneral.com/wp-content/uploads/2019/04/shutterstock_384943213-1150x647.jpg" img alt="whippy wellness"/>

              <h3>Do you find yourself working out with different results each and everyday? Tracking steps, calories, and minutes of activity but still not seeing the results you're seeking?
              Maybe it is lifestyle choices you make! 
              
              Track your daily habits to see how they impact your workouts as well as your overall, holistic wellbeing.</h3>

              {/* <Card>
                <CardMedia>

                  image="/public/example.png"
                </CardMedia>

              </Card> */}
            
            
            
            
            
            </Paper>

            <p>
              
           
            </p>

            <p>
           
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                LOGIN
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);

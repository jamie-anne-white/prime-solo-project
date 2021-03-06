import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Whippy Wellness</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            {/* <Link className="nav-link" to="/info">
              Info
            </Link> */}

            <Link className="nav-link" to="/add">
              Add Workout
            </Link>

            {/* <Link className="nav-link" to="/edit">
              Edit Workout
            </Link> */}

            {/* <Link className="nav-link" to="/results">
              Results
            </Link> */}

            {/* Moved location of logout to the end of the nav bar */}
            {/* <LogOutButton className="nav-link" /> */}

          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
        <LogOutButton className="nav-link" />

      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);

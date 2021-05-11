import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink to="/watchlist">
      Watchlist
    </NavLink>
    <NavLink id ="add-show" to="/create-show">
      Add Show
    </NavLink>
    <NavLink id="sign-out" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink id="sign-up" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink id="sign-in" to="/sign-in">
      Sign In
    </NavLink>
  </>
);
const alwaysOptions = (
  <div id="alwaysOptions">
    <NavLink className="all-shows" to="/shows">
      All Shows
    </NavLink>
  </div>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink id="appName" to="/">
          Ima Miru
        </NavLink>
        <div className="links">
          <div className="authorized">
            {user && <div className="userWelcome"> 
              <div></div> 
              Welcome, {user.username}
            </div>}
              <div className="navOptions">
                {alwaysOptions}
                {user ? authenticatedOptions : unauthenticatedOptions}
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav
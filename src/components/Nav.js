import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  const { currentUser, onSignOut = () => {} } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    onSignOut();
  };
    if (!currentUser) {
      return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
					<NavLink to="/">
						<span className="navbar-brand">VegExchange</span>
					</NavLink>
        </nav>
      )
    }

    return (
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
					<NavLink to="/">
						<span className="navbar-brand">VegExchange</span>
					</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
							<NavLink to="/open_trades">
              	<span className="nav-link">Find a Trade</span>
							</NavLink>
            </li>
            <li className="nav-item">
							<NavLink to="/my_trades">
              	<span className="nav-link">My Trades</span>
							</NavLink>
						</li>
            <li className="nav-item active">
							<NavLink to="/profile">
								<span className="nav-link">Profile</span>
							</NavLink>
            </li>
            <li className="nav-item active">
							<NavLink to="/sign_in" onClick={handleSignOutClick}>
								<span className="nav-link">Sign Out</span>
							</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav; 
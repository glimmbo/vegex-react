import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
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
            <li className="nav-item active">
							<NavLink to="/profile">
								<span className="nav-link">Profile</span>
							</NavLink>
            </li>
            {/* <li className="nav-item">
							<NavLink to="/inventory">
								<span className="nav-link">Inventory</span>
							</NavLink>
            </li> */}
            {/* <li className="nav-item">
							<NavLink to="/notifications">
              	<span className="nav-link">Notifications</span>
							</NavLink>
            </li> */}
            <li className="nav-item">
							<NavLink to="/offers">
              	<span className="nav-link">Browse Offers</span>
							</NavLink>
            </li>
            <li className="nav-item">
							<NavLink to="/trades">
              	<span className="nav-link">Active Trades</span>
							</NavLink>
						</li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
            {/* <li className="nav-item dropup">
              <span className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trade</span>
              <div className="dropdown-menu" aria-labelledby="dropdown10">
                <a className="dropdown-item" href="#">Make an Offer</a>
                <a className="dropdown-item" href="#">Browse Offers</a>
                <a className="dropdown-item" href="#">My Trade Tables</a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    )
}

export default Nav; 
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<div className="navbar-item">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/menu">Menu</NavLink>
					</div>
					<div className="navbar-item">
						<button>
							Pickup
						</button>
						<button>
							Delivery
						</button>
					</div>
				</nav>
			</div>
		)
	}
}

export default NavBar;

/* <ul>
							<li><a>Home</a></li>
							<li><a>Our Menu</a></li>
							<li><a>Catering</a></li>
							<li><a>Find Us</a></li>
							<li><a>About Us</a></li>
						</ul>*/
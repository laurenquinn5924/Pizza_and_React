import React from 'react';
import './MenuList.css';
import { NavLink } from 'react-router-dom';
import Pizzas from '../Pizzas/Pizzas';
import Salati from '../Salati/Salati';

class MenuList extends React.Component {
	
	render() {
		return (
			<div>
				<nav>
					
					<ul>
						<li>
							<NavLink to="/menu/pizzas" activeClassName="selected">Pizzas</NavLink></li>
						<li><a onClick={this.toggleSalati}>Salati</a></li>
						<li><a>Pasta</a></li>
						<li><a>Dolci</a></li>
						<li><a>Beverages</a></li>
					</ul>
				</nav>
				<Pizzas />
				
			</div>
		)
	}
}

export default MenuList;

/*constructor(props) {
		super(props);
		this.state = {
			isHidden: true
		};
		this.toggleSalati = this.toggleSalati.bind(this);
	}

	toggleSalati() {
		if(this.state.visibility === true){
			this.setState({
				isHidden: false
			})
		}
		else {
			this.setState({
				isHidden: true
			})
		}
	}
*/
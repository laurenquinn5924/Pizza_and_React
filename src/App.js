import React, { Component } from 'react';
import './App.css';
import MenuList from './components/MenuList/MenuList';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
		<div>
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route  path="/menu" component={MenuList} />
						
					</Switch>
				</div>
			</BrowserRouter>
		</div>
		
    );
  }
}

export default App;

/*<div className="App">
	 	<NavBar />
    	<MenuList />
      </div>*/
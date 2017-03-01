import React from 'react';
import {render} from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import 'whatwg-fetch';

import { profile } from './components/profile';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jsonResponse: null
		};
	}
	
	componentDidMount() {
		fetch('./user.json')
		    .then( response => response.json())
			.then( jsonResponse => this.setState({ jsonResponse: jsonResponse }) )
			.catch( ex => console.log('json parsing failed', ex) )
	}

	render() {
		return (
			<MuiThemeProvider>
				<div style={{marginBottom: "20px"}}>
					<AppBar title="Worm Files"/>
						{this.state.jsonResponse ? profile(this.state.jsonResponse) : ""	}
				</div>
			</MuiThemeProvider>
		);
	}
}


render(
  <App />,
  document.getElementById('app')
);


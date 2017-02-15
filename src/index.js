// Set up your application entry point here...
import React from 'react';
import {render} from 'react-dom';
//import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';

//import routes from './routes';
//import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

//const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const CardExampleWithAvatar = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

//import { Grid, Row, Col } from 'react-flexbox-grid';

/*const HelloGrid = () => (
  <Grid>
	<Row>
	  <Col xsOffset={11} xs={1}>Hello</Col>
	  <Col xsOffset={10} xs={2}>My</Col>
	  <Col xsOffset={9} xs={3}>Grid</Col>
	</Row>
  </Grid>
);*/

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
	<div className="full-width">
	  <div id="card1">
		<CardExampleWithAvatar />
	  </div>
	  <div id="card2">
		<CardExampleWithAvatar />
	  </div>
	</div>
  </MuiThemeProvider>
);

render(
  /*<Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>*/
  <App />,
  document.getElementById('app')
);


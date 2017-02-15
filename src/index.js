import React from 'react';
import {render} from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Flexbox from 'flexbox-react';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const CardExampleWithAvatar = () => (
  <Card style={{margin: "1%", minWidth: "100px"}}>
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


const App = () => (
  <MuiThemeProvider>
	<div>
      <AppBar
		title="Worm Files"
	    />
	  <h1 style={{padding: "1%", display: "inline-block"}}>David Cornella</h1>
	  <h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>CEO at Google</h2>
	  
	  <Flexbox flexDirection="row">
	    <Flexbox>
	      <CardExampleWithAvatar />
	    </Flexbox>
	    <Flexbox>
	      <CardExampleWithAvatar />
	    </Flexbox>
	  </Flexbox>

	  <Flexbox flexDirection="row">
	    <Flexbox flexGrow={4}>
	      <CardExampleWithAvatar />
	    </Flexbox>
	    <Flexbox flexGrow={2}>
	      <CardExampleWithAvatar />
	    </Flexbox>
	  </Flexbox>

	</div>

  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById('app')
);


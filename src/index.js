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

const wrapCard = (title, subtitle, cardInnerJSX) => (
  <Card style={{margin: "10px", width: "100%"}}>
    <CardTitle title={title} subtitle={subtitle} />
    <CardText>
      {cardInnerJSX}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

const cards = [
	wrapCard("Workplace", "Where the person works", (
		<div>
			<ul>
				<li>
					Google 2017 - Current
					<br/>
					Lead Google to make a lot of money. Sold the company to Alta Vista.
				</li>
				<li>
					Cal Poly Orfalea College of Business 2015 - 2017
				</li>
				<li>
					Adobe 2016 - 2016
				</li>
			</ul>
		</div>
	)),
	wrapCard("Hobbies", "The person's hobbies", <div>hello card</div>),
	wrapCard("Personality", "What's... the deal... with INTJs?!", <div>hello card</div>),
	wrapCard("Connections", "Who the person knows", <div>hello card</div>)
]

const App = () => (
  <MuiThemeProvider>
	<div>
      <AppBar
		title="Worm Files"
	    />
	  <Flexbox flexDirection="row">
		  <Flexbox flexGrow={1}>
		  </Flexbox>
		  <Flexbox>


		<Paper style={{marginTop: "20px", padding: "30px", paddingTop: "0px"}}zDepth={2}>
	<div style={{minWidth: "900px"}}>

		<h1 style={{padding: "1%", display: "inline-block"}}>David Cornella</h1>
		<h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>CEO at Google</h2>
		
		<Flexbox flexDirection="row">
			<Flexbox flexGrow={1}>
			{cards[0]}
			</Flexbox>
			<Flexbox flexGrow={2}>
			{cards[1]}
			</Flexbox>
		</Flexbox>

		<Flexbox flexDirection="row">
			<Flexbox flexGrow={1}>
			{cards[2]}
			</Flexbox>
			<Flexbox flexGrow={1}>
			{cards[3]}
			</Flexbox>
		</Flexbox>

	  </div>
	  </Paper>



		  </Flexbox>
		  <Flexbox flexGrow={1}>
		  </Flexbox>
	   </Flexbox>

	  

	</div>

  </MuiThemeProvider>
);

render(
  <App />,
  document.getElementById('app')
);


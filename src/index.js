import React from 'react';
import {render} from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Flexbox from 'flexbox-react';

import { twitterCard, AsyncTwitter } from './components/infocards/twitter-card';
// import { Timeline } from 'react-twitter-widgets';
//import 'whatwg-fetch';

// import { profile } from './components/profile';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/*
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
*/

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
	wrapCard("Connections", "Who the person knows", <div>hello card</div>),
	twitterCard("potus") //<AsyncTwitter></AsyncTwitter>
]

/*const App = () => (
<MuiThemeProvider>
	<div style={{marginBottom: "20px"}}>
		<AppBar title="Worm Files"/>
		<Flexbox flexDirection="row">
			<Flexbox flexGrow={1} />  {/* to keep content centered *}

			<Flexbox>
				<Paper style={{marginTop: "20px", padding: "30px", paddingTop: "0px"}}zDepth={2}>
					<div style={{minWidth: "900px"}}>					 	
					{/* Profile information *}
						<div id='profile-header' style={{paddingTop: "20px"}}>
							<img width='100px' src='https://media.licdn.com/media/AAEAAQAAAAAAAAmEAAAAJDNjMDVmNzdkLTlmYWYtNGU1OC1hNjUwLWQ2MmQ4OWY1ZTY2OQ.jpg' />
							<h1 style={{padding: "1%", display: "inline-block"}}>David Cornella</h1>
							<h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>CEO at Google</h2>
						</div>

						{/* First row of cards *}
						<Flexbox flexDirection="row">
							<Flexbox flexGrow={1}>
								{cards[0]}
							</Flexbox>
							<Flexbox flexGrow={2}>
								{cards[1]}
							</Flexbox>
						</Flexbox>

						{/* Second row of cards *}
						<Flexbox flexDirection="row">
							<Flexbox flexGrow={1}>
								{cards[2]}
							</Flexbox>
							<Flexbox flexGrow={1}>
								{cards[3]}
							</Flexbox>
							<Flexbox>
								{cards[4]}
							</Flexbox>
						</Flexbox>
						
					</div>
				</Paper>
			</Flexbox>

			<Flexbox flexGrow={1} />  {/* to keep content centered *}
		</Flexbox>
	</div>
</MuiThemeProvider>
);*/

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {profile: null}
    }

    componentDidMount() {

        const compile = extendedMarkdown => { console.error("Not implemented - talk to Max"); return {
            right: {
                name: "David",
                currentPosition: "CEO",
                currentCompany: "Google",
                pictureUrl: "string",
                twitter: "potus", 
                cards: [{
                    title: "Card Title 1",
                    content: "#markdown string 1\n * bullet 1\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 2",
                    content: "#markdown string 2\n * bullet 1\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 3",
                    content: "#markdown string 3\n * bullet 1\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 4",
                    content: "#markdown string 4\n * bullet 1\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 5",
                    content: "#markdown string 5\n * bullet 1\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 6",
                    content: "#markdown string 6\n * bullet 1\n * bullet 2\n * bullet 3"
                }]
            }
        }}

        Promise.resolve({asdf:"asdf"})
        //fetch("our url -- change this")
        //.then(r => r.json())
        .then(json => { console.error('Talk to Logan to get the url'); return json; })
        .then(compile)
        .then(profile => {
            this.setState({profile: profile})
        })
    }

    renderLoading() {
        return <div>Loading</div>
    }

    renderLoadedProfile() {
        return (<Paper style={{marginTop: "20px", padding: "30px", paddingTop: "0px"}}zDepth={2}>
            <div style={{minWidth: "900px"}}>					 	
            {/* Profile information */}
                <div id='profile-header' style={{paddingTop: "20px"}}>
                    <img width='100px' src='https://media.licdn.com/media/AAEAAQAAAAAAAAmEAAAAJDNjMDVmNzdkLTlmYWYtNGU1OC1hNjUwLWQ2MmQ4OWY1ZTY2OQ.jpg' />
                    <h1 style={{padding: "1%", display: "inline-block"}}>{this.state.profile.right.name}</h1>
                    <h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>CEO at Google</h2>
                </div>

                {/* First row of cards */}
                <Flexbox flexDirection="row">
                    <Flexbox flexGrow={1}>
                        {wrapCard(this.state.profile.right.cards[0].title, "", this.state.profile.right.cards[0].content) /*cards[0]*/}
                    </Flexbox>
                    <Flexbox flexGrow={2}>
                        {cards[1]}
                    </Flexbox>
                </Flexbox>

                {/* Second row of cards */}
                <Flexbox flexDirection="row">
                    <Flexbox flexGrow={1}>
                        {cards[2]}
                    </Flexbox>
                    <Flexbox flexGrow={1}>
                        {cards[3]}
                    </Flexbox>
                    <Flexbox>
                        {cards[4]}
                    </Flexbox>
                </Flexbox>
                
            </div>
        </Paper>)
    }

    render() {
        return (
            <MuiThemeProvider>
	<div style={{marginBottom: "20px"}}>
		<AppBar title="Worm Files"/>
		<Flexbox flexDirection="row">
			<Flexbox flexGrow={1} />  {/* to keep content centered */}

			<Flexbox>
                {
                    this.state.profile && this.state.profile.right
                        ? this.renderLoadedProfile()
                        : this.renderLoading()
                }
				
			</Flexbox>

			<Flexbox flexGrow={1} />  {/* to keep content centered */}
		</Flexbox>
	</div>
</MuiThemeProvider>
        )
    }
}

render(
  <App />,
  document.getElementById('app')
);

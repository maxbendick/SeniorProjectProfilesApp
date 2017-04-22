import React from 'react';
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Flexbox from 'flexbox-react';

import { twitterCard, AsyncTwitter } from './components/infocards/twitter-card';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const wrapCard = (title, markdown) =>
  <Card style={{margin: "10px", width: "100%"}}>
    <CardTitle title={title}  /> 
	<ReactMarkdown source={markdown} />
  </Card>


const createRows = cards => cards.map(
    (c,i) =>
        <Flexbox flexGrow={i+1} key={i}>
            {wrapCard(c.title, c.content)}
        </Flexbox>)

const renderLoading = () => <div>Loading</div>


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {profile: null}
    }

    componentDidMount() {

        const compile = extendedMarkdown => { console.error("Not implemented - talk to Max"); return {
            right: {
                name: "Chris del Chris",
                currentPosition: "Janitor",
                currentCompany: "Macy's",
                pictureUrl: "https://media.licdn.com/media/AAEAAQAAAAAAAAmEAAAAJDNjMDVmNzdkLTlmYWYtNGU1OC1hNjUwLWQ2MmQ4OWY1ZTY2OQ.jpg",
                twitter: "potus", 
                cards: [{
                    title: "Card Title 1",
                    content: "* bullet 11\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 2",
                    content: "* bullet 12\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 3",
                    content: "* bullet 13\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 4",
                    content: "* bullet 14\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 5",
                    content: "* bullet 15\n * bullet 2\n * bullet 3"
                },
                {
                    title: "Card Title 6",
                    content: "* bullet 16\n * bullet 2\n * bullet 3"
                }]
            }
        }}
		

        Promise.resolve({asdf:"asdf"})
        .then(json => { console.error('Talk to Max to get the url'); return json; })
        .then(compile)
        .then(profile => {
            this.setState({profile: profile})
        })
    }

    renderLoadedProfile() {

        if (this.state.profile.left) {
            console.error("Profile failed to load. Error was:", this.state.profile.left);
            return <div>Profile failed to load</div>
        }

        const profile = this.state.profile.right;

        const positionTitleJoiner = (profile.currentPosition && profile.currentPosition.length > 0
                                    && profile.currentCompany && profile.currentCompany.length > 0)
                                        ? "at"
                                        : "";
	
        return (
            <Paper style={{marginTop: "20px", padding: "30px", paddingTop: "0px"}}zDepth={2}>
                <div style={{minWidth: "900px"}}>					 	
                    {/* Profile information */}
                    <div id='profile-header' style={{paddingTop: "20px"}}>
                        <img width='100px' src={profile.pictureUrl} />
                        <h1 style={{padding: "1%", display: "inline-block"}}>{profile.name}</h1>
                        
                        <h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>
                            {profile.currentPosition} {positionTitleJoiner} {profile.currentCompany}</h2>
                    </div>

                    {/* First row of cards */}
                    <Flexbox flexDirection="column">
                        {createRows(profile.cards)}
                    </Flexbox>
                </div>
            </Paper>)
    }

    render() {
        return (
            <MuiThemeProvider>
				<div style={{marginBottom: "20px"}}>
					<AppBar title="Vertible" iconElementLeft={<div></div>}/>
					<Flexbox flexDirection="row">
						<Flexbox flexGrow={1} />  {/* to keep content centered */}
					<Flexbox>
					{
						this.state.profile && this.state.profile.right
							? this.renderLoadedProfile()
							: renderLoading()
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

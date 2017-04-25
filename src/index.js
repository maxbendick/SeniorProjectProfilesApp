import React from 'react';
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Flexbox from 'flexbox-react';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class ProfileApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {profile: null}
    }

    componentDidMount() {
        fetch("/profile/" + this.props.profileId)
        .then(r => r.json())
        .then(profile => {
            this.setState({profile: profile})
        })
    }

    render() {
        return this.state.profile
            ? (this.state.profile.right
                ? <Profile profile={this.state.profile.right} />
                : <ProfileError />)
            : <ProfileLoading />
    }
}


const Profile = ({profile}) => {
    const positionTitleJoiner = (profile.position && profile.position.length > 0
                                && profile.company && profile.company.length > 0)
                                    ? "at"
                                    : "";
    return (
        <Paper style={{marginTop: "20px", padding: "30px", paddingTop: "0px"}} zDepth={2}>
            <div style={{minWidth: "900px"}}>
                <div id='profile-header' style={{paddingTop: "20px"}}>
                    <img width='100px' src={profile.pictureUrl} />
                    <h1 style={{padding: "1%", display: "inline-block"}}>{profile.name}</h1>
                    
                    <h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>
                        {profile.position} {positionTitleJoiner} {profile.company}</h2>
                </div>
                <Flexbox flexDirection="column">
                    <CardList cards={profile.cards} />
                </Flexbox>
            </div>
        </Paper>)
}

const MarkdownCard = ({title, markdown}) => (
  <Card style={{margin: "10px", width: "100%"}}>
    <CardTitle title={title}  /> 
    <div style={{padding: "16px"}}>
        <ReactMarkdown source={markdown} />
    </div>
  </Card>)

const CardList = ({cards}) =>
    <div>{
        cards.map((c,i) =>
            <Flexbox flexGrow={i+1} key={i}>
                <MarkdownCard title={c.title} markdown={c.content} />
            </Flexbox>)
    }</div>

const ProfileError = ({}) => <div>Profile failed to load</div>

const ProfileLoading = ({}) => <div>Loading</div>

const AppWrapper = ({children}) =>
    <MuiThemeProvider>
        <div style={{marginBottom: "20px"}}>
            <AppBar title="Vertible" iconElementLeft={<div></div>}/>
            <Flexbox flexDirection="row">
                <Flexbox flexGrow={1} />  {/* to keep content centered */}
            <Flexbox>
                {children}
            </Flexbox>
                <Flexbox flexGrow={1} />  {/* to keep content centered */}
            </Flexbox>
        </div>
    </MuiThemeProvider>

const App = ({}) =>
    <Router>
        <AppWrapper>
            <Route path="/app/profile/:profileId" component={ProfileAppRouteAdapter} />
        </AppWrapper>
    </Router>

const ProfileAppRouteAdapter = ({match}) => <ProfileApp profileId={match.params.profileId} />

render(
	<App />,
	document.getElementById('app')
);

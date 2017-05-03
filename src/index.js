import React from 'react';
import ReactMarkdown from 'react-markdown';
import {render} from 'react-dom';
require('./favicon.ico');
import './styles/styles.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Flexbox from 'flexbox-react';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class ProfileApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {profile: null};
    }

    componentDidMount() {
        fetch("/profile/" + this.props.profileId)
        .then(r => r.json())
        .then(profile => {
            this.setState({profile: profile});
        });
        //const test_profile = {"right":{"name":"Julie Buckmeier","twitter":"N/A","position":"Clinical Affairs","company":"Beckman Coulter Inc.","pictureurl":"https://i1.rgstatic.net/ii/profile.image/AS%3A350447601766402%401460564627796_l/Julie_Buckmeier.png","cards":[{"title":"Company","content":"\nBeckman Coulter Diagnostics products produce information used by physicians to diagnose disease, make treatment decisions and monitor their patients.\n\n\nBeckman Coulter Life Sciences provides laboratory solutions to  universities, government, biotechnology and pharmaceutical companies, hospitals, and commercial laboratories.\n\n\n#### Stats\n* **Empl. Range**: > 10,000\n* **Empl. Revenue Range**: > 1B\n* **Founded**: 1935\n* **Company LinkedIn**: [www.linkedin.com/company/beckman-coulter](https://www.linkedin.com/company/beckman-coulter)\n"},{"title":"Recent Research Contributions","content":"\n* MicroRNA signatures of colonic adenomas according to histology\n* Selenium Supplementation for Prevention of Colorectal Adenomas and Risk of Associated Type 2 Diabetes\n* Celecoxib for the Prevention of Colorectal Adenomas: Results of a Suspended Randomized Controlled Trial \n\n\n**ResearchGate Profile**: [www.researchgate.net/profile/Julie_Buckmeier](https://www.researchgate.net/profile/Julie_Buckmeier)\n"}]}}
        //this.setState({profile: test_profile})
    }

    render() {
        return (
            this.state.profile
            ? (this.state.profile.right
                ? <Profile profile={this.state.profile.right} />
                : <ProfileError />)
            : <ProfileLoading />
        );
    }
}

const MarkdownRow = ({title, markdown}) => (
  <div style={{display: "flex", flexDirection: "row", marginLeft: "50px", marginRight: "50px"}}>
    <p style={{minWidth: "130px", color: "#9F9F9F"}}>{title}</p>
    <div style={{marginLeft: "20px", marginRight: "30px"}}>
        <ReactMarkdown source={markdown} />
    </div>
  </div>);

export const CardList = ({cards}) => {
    return (
        <div>{
            cards.map((c,i) =>
                <div key={i}>
                    <MarkdownRow title={c.title} markdown={c.content} />
                    {
                        i != cards.length - 1 ?
                        <Divider style={{marginLeft: "50px", marginRight: "50px"}}/>
                        : <div />
                    }
                </div>
            )
        }
        </div>
    );
};

const ProfileError = ({}) => <div>Profile failed to load</div>;

const ProfileLoading = ({}) => <div>Loading...</div>;

const Profile = ({profile}) => {
    return (
        <Flexbox style={{justifyContent: "center"}}>
            <Paper style={{maxWidth: "700px", marginTop: "20px"}} zDepth={1}>
                <Flexbox flexDirection="column">
                    <ProfileHeader profile={profile}/>
                    <Divider />
                    <CardList cards={profile.cards}/>
                </Flexbox>
            </Paper>
        </Flexbox>);
};

const ProfileHeader = ({profile}) => {
    return (
        <Flexbox id="profile-header" flexDirection="row" alignItems="flex-start" style={{padding: "20px"}}>
            <img id="profile-img" style={{width: "100px", height: "100px", borderRadius: "50%", padding: "10px", paddingBottom: "0px", paddingTop: "0px"}} src={profile.pictureurl} />
            <Flexbox id="name-title" flexDirection="column" alignItems="flex-start">
                <div style={{padding: "0px", paddingTop: "10px", margin: "0px", color: "#555555", fontSize: 24}}>{profile.name}</div>
                <div style={{padding: "0px", paddingTop: "10px", margin: "0px", color: "#555555"}}>{profile.position}</div>
                <div style={{color: "#9F9F9F"}}>{profile.company}</div>
            </Flexbox>
        </Flexbox>
    );
};

const AppWrapper = ({children}) =>
    <MuiThemeProvider>
        <div style={{marginBottom: "20px"}}>
            <AppBar title="Vertible" iconElementLeft={<div></div>} style={{backgroundColor: "#4F98D7"}}/>
            {children}
        </div>
    </MuiThemeProvider>;

const App = ({}) =>
    <Router>
        <AppWrapper>
            <Route path="/app/profile/:profileId" component={ProfileAppRouteAdapter} />
        </AppWrapper>
    </Router>;

const ProfileAppRouteAdapter = ({match}) => <ProfileApp profileId={match.params.profileId} />;

render(
	<App />,
	document.getElementById('app')
);

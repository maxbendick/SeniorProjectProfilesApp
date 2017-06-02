import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ProfileAppRouteAdapter, GoogleProfileAppRouteAdapter} from './index.js';
import {FavoritesList} from './favorites.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Flexbox from 'flexbox-react';
import Paper from 'material-ui/Paper';
import wordLogo from '../images/vertible-word.png';
import searchIcon from '../images/search_icon.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favorites: []};
    }
    
    componentDidMount() {
        const stored_favorites = localStorage.getItem('favorites');
        if (stored_favorites) {
            this.setState({favorites: JSON.parse(stored_favorites)});
        }
    }

    addFavorite({profile}) {
        var toType = function(obj) {
            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        //console.log("profile of type: " + toType(profile));
        //console.log("adding favorite for profile: " + JSON.stringify(profile));
        // profile = {name: 'Jim Bob', company: 'Google', twitter: 'potus'}; // for local testing only
        const profileURL = "/app/profile/?name=" + profile.name + "&company=" + profile.company + "&twitter=" + profile.twitter;
        //console.log("adding favorite: " + profileURL);
        const fav_to_add = {'url': profileURL, 'name': profile.name, 'company': profile.company}
        const already_favorited = this.state.favorites.map((c,i) => c.url).indexOf(profileURL) != -1 // checks if new fav is already in list
        if (!already_favorited && this.state.favorites.length > 0) {
            const current_favs = this.state.favorites;
            current_favs.push(fav_to_add);
            this.setState({favorites: current_favs});
            localStorage.setItem('favorites', JSON.stringify(current_favs));
        }
        else if (!already_favorited && this.state.favorites.length == 0) { 
            this.setState({favorites: [fav_to_add]});
            localStorage.setItem('favorites', JSON.stringify([fav_to_add]));
        }
    }

    removeFavorite({profileURL}) {
        //console.log("removing favorite: " + profileURL);
        // where profileURL is like /app/profile?name=Jim Bob&company=Google&twitter=potus
        const current_favs = this.state.favorites;
        const index = current_favs.map((c,i) => c.url).indexOf(profileURL);
        if (index > -1) {
            current_favs.splice(index, 1);
            this.setState({favorites: current_favs});
            localStorage.setItem('favorites', JSON.stringify(current_favs));
        }
    }

    updateFavorites({profile}) {
        //console.log("updating favorites for (JSON): " + JSON.stringify(profile));
        //console.log("updating favorites for (raw): " + profile);
        // handle the clicking of profile header checkbox/star
        // profile = {name: 'Jim Bob', company: 'Google', twitter: 'potus'}; // for local testing only
        const current_favs = this.state.favorites;
        const profileURL = "/app/profile/?name=" + profile.name + "&company=" + profile.company + "&twitter=" + profile.twitter;
        //console.log("handling update favorite for: " + profileURL);
        const already_favorited = this.state.favorites.map((c,i) => c.url).indexOf(profileURL) != -1 // checks if new fav is already in list
        if (already_favorited) {
            this.removeFavorite({profileURL});
        }
        else {
            this.addFavorite({profile});
        }
    }

    render() {
        return (
            <Router>
                <AppWrapper favorites={this.state.favorites} removeFavorite={this.removeFavorite.bind(this)}>
                    <Route path="/app/profile" render={props => <ProfileAppRouteAdapter {...props} updateFavorites={this.updateFavorites.bind(this)} />} />
                    <Route path="/app/gprofile/:profileId" component={GoogleProfileAppRouteAdapter} />
                </AppWrapper>
            </Router>
        );
    }
}

const AppWrapper = ({children, favorites, removeFavorite}) => {
    return (
        <MuiThemeProvider>
            <div style={{marginBottom: "20px"}}>
                <AppBar title="" 
                        zDepth={1} 
                        iconElementLeft={<a href="/app/profile" ><img height="40px" src={wordLogo}/></a>} 
                        iconElementRight={<a href="/app/profile" title="Get a new profile"><img alt="Search icon Copyright by Mello (https://thenounproject.com/stonuiiuntk/) used under creative commons" height="30px" src={searchIcon}/></a>}
                        style={{backgroundColor: "#4F98D7"}}/>
                <Flexbox flexDirection="row">
                    <Paper id="sidebar" zDepth={1}>
                        <div style={{marginTop: "20px", marginBottom: "10px", textAlign: "center", verticalAlign: "middle"}}>Favorites</div>
                        <FavoritesList favorites={favorites} removeFavorite={removeFavorite}/>
                    </Paper>
                    <div style={{flexGrow: 1}}>
                        {children}
                    </div>
                </Flexbox>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
import React from 'react';
import Paper from 'material-ui/Paper';
import { Timeline } from 'react-twitter-widgets';

// For more info about the Twitter widgets: https://github.com/andrewsuzuki/react-twitter-widgets

export const twitterCard = (twitterUser) => (
    <Paper style={{margin: 10, textAlign: 'center', display: 'inline-block',}} children={
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: twitterUser
            }}
            options={{
                username: twitterUser,
                height: '300',
                width: '300',
                chrome: "nofooter"
            }}
            onLoad={() => console.log('Twitter timeline is loaded for ' + twitterUser + '!')}
        />}
    />
);

/*const profilePromise = fetch("http://senior-project-profiles-server-dev.us-east-1.elasticbeanstalk.com/profile/6")
.then(function(response) {
	return response.json()
});*/

export class AsyncTwitter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            twitterHandle: null
        };
    }

    componentDidMount() {
        this.setState({twitterHandle: 'potus'});
        /*profilePromise.then(profile => {
            console.log(profile);
            this.setState({twitterHandle: profile['twitter-handle']});
        });*/
    }

    render() {
        return this.state.twitterHandle
            ? twitterCard(this.state.twitterHandle)
            : <div></div>;
    }

}
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
import React from 'react';
import Flexbox from 'flexbox-react';
import Paper from 'material-ui/Paper';

import { twitterCard } from './infocards/twitter-card';
import { workHistoryCard } from './infocards/workhistory-card';
import { hobbiesCard } from './infocards/hobbies-card';
import { personalityCard } from './infocards/personality-card';
import { connectionsCard } from './infocards/connections-card';


export const profile = (profileJson) => {
    return <Flexbox flexDirection="row">
        <Flexbox flexGrow={1} />  {/* to keep content centered */}

        <Flexbox> 
            <Paper style={{marginTop: "20px", padding: "30px", paddingTop: "0px"}}zDepth={2}>
                <div style={{minWidth: "900px"}}>
                    
                    {/* Profile information */}
                    <div id='profile-header' style={{paddingTop: "20px"}}>
                        <img width='100px' src='https://media.licdn.com/media/AAEAAQAAAAAAAAmEAAAAJDNjMDVmNzdkLTlmYWYtNGU1OC1hNjUwLWQ2MmQ4OWY1ZTY2OQ.jpg' />
                        <h1 style={{padding: "1%", display: "inline-block"}}>{profileJson.firstName} {profileJson.lastName}</h1>
                        <h2 style={{display: "inline-block", color: "#444", marginLeft: "10px"}}>{profileJson.title} at {profileJson.company}</h2>
                    </div>

                    {/* First row of cards */}
                    <Flexbox flexDirection="row">
                        <Flexbox flexGrow={1}>
                            {workHistoryCard(profileJson.workHistory)}
                        </Flexbox>
                        <Flexbox flexGrow={2}>
                            {hobbiesCard(profileJson.hobbies)}
                        </Flexbox>
                    </Flexbox>

                    {/* Second row of cards */}
                    <Flexbox flexDirection="row">
                        <Flexbox flexGrow={1}>
                            {personalityCard(profileJson.firstName, profileJson.personality)}
                        </Flexbox>
                        <Flexbox flexGrow={1}>
                            {connectionsCard(profileJson.connections)}
                        </Flexbox>
                        <Flexbox>
                            {twitterCard(profileJson.twitterHandle)}
                        </Flexbox>
                    </Flexbox>
                    
                </div>
            </Paper>
        </Flexbox>

        <Flexbox flexGrow={1} />  {/* to keep content centered */}
    </Flexbox>
}
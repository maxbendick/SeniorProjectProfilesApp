import React from 'react';
import { infoCard } from '../info-card';

export const hobbiesCard = (hobbies) => {
    return infoCard("Hobbies and Interests",
        <ul>
            {hobbies.map((hobby, index) => 
                <li key={index}>{hobby}</li>
            )}
        </ul>
    );
}
import React from 'react';
import { infoCard } from '../info-card';

export const personalityCard = (name, personality) => {
    return infoCard("Personality", 
        <div>
            <strong>{name} is an {personality.mbti.type.toUpperCase()}</strong><br /><br />
            {personality.mbti.description}
        </div>
    );
}
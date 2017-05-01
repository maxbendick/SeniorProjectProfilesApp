import React from 'react';
import { infoCard } from '../info-card';

export const workHistoryCard = (workHistory) => {
    return infoCard("Work History",
        <ul>
            {workHistory.map((wh, index) => 
                <li key={index}>{wh.company} -- {wh.title} -- {wh.startDate.year} to {wh.endDate.year}</li>
            )}
        </ul>);
};
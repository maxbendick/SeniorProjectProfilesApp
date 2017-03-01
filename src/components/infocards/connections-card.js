import React from 'react';
import { infoCard } from '../info-card';

export const connectionsCard = (connections) => {
    return infoCard("Connections",
        <div>
            <p>You have {connections.length} common connections:</p>
            <ul>
                {connections.map((connection, index) =>
                    <li key={index}>{connection}</li>
                )}
            </ul>
        </div>
    );
}
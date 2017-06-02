import React from 'react';
import Flexbox from 'flexbox-react';

export class FavoritesList extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <ul className="menu-ul">
            { 
                this.props.favorites ? 
                this.props.favorites.map((c,i) =>
                    <FavoritesListElement key={i} profileURL={c.url} name={c.name} removeFavorite={this.props.removeFavorite}/>)
                :
                <div />
            }
            </ul>
        );
    }
}

const FavoritesListElement = ({profileURL, name, removeFavorite}) => {
    return (
        <li className="menu-li">
            <a href={profileURL}>
                <Flexbox flexDirection="row" justifyContent="space-between">
                    {name}
                </Flexbox>
            </a>
        </li>
    );
}
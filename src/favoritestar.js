import React, {PropTypes} from 'react';
import Flexbox from 'flexbox-react';

class FavoriteStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStarred: false};
    }

    componentWillMount() {
        const profile = this.props.profile;
        const stored_favorites = localStorage.getItem('favorites');
        if (stored_favorites) {
            const current_favs = JSON.parse(stored_favorites);
            const profileURL = "/app/profile/?name=" + profile.name + "&company=" + profile.company + "&twitter=" + profile.twitter;
            const already_favorited = current_favs.map((c,i) => c.url).indexOf(profileURL) != -1 // checks if profile is already in list
            if (already_favorited) {
                this.setState({isStarred: true});
            }
        }
    }

    toggleStarChange() {
        const { handleStarChange, label } = this.props;
        this.setState(({ isStarred }) => ({isStarred: !isStarred}));
        handleStarChange(label);
    }

    render() {
        return (
            <input
                title="Add or remove from favorites"
                type="checkbox"
                id="favstar"
                className="favtoggle favtoggle-star-empty"
                checked={this.state.isStarred}
                onChange={this.toggleStarChange.bind(this)}
            />
        );
    }
}

FavoriteStar.propTypes = {
  handleStarChange: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

export default FavoriteStar;
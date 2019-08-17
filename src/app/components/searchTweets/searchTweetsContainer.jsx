import React, {Component} from 'react';
import SearchTweetsSearchBar from './searchTweetsSearchbar.jsx';
import SearchTweetsList from './searchTweetsList.jsx';
import {fetchTweetService, verifyQuery} from '../../services/fetchTweetsService.js';

class SearchTweetsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            inputError: false
        }

        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onSearchClick(textInput) {
        if (verifyQuery(textInput)) {
            this.setState({inputError: false});
        } else {
            this.setState({inputError: true});
            return;
        }

        fetchTweetService.fetchTweets(textInput)
            .then((tweets) => this.setState({tweets: tweets}));
    }

    render() {
        return (
            <div>
                <SearchTweetsSearchBar
                    onSearchClick={this.onSearchClick}
                    inputError={this.state.inputError}></SearchTweetsSearchBar>
                <SearchTweetsList tweets={this.state.tweets}></SearchTweetsList>
            </div>
        );
    }
}

export default SearchTweetsContainer;
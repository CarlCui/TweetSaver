import React from 'react';
import SearchTweetsSearchBar from './searchTweetsSearchbar.jsx';
import SearchTweetsList from './searchTweetsList.jsx';
import {fetchTweetService, verifyQuery} from '../../services/fetchTweetsService.js';

export default function SearchTweetsContainer() {

    const [tweets, setTweets] = React.useState([]);
    const [inputError, setInputError] = React.useState(false);

    const onSearchClick = (textInput) => {
        if (verifyQuery(textInput)) {
            setInputError(false);
        } else {
            setInputError(true);
            return;
        }

        fetchTweetService.fetchTweets(textInput)
            .then((tweets) => setTweets(tweets));
    };

    return (
        <div>
            <SearchTweetsSearchBar
                onSearchClick={onSearchClick}
                inputError={inputError}></SearchTweetsSearchBar>
            <SearchTweetsList tweets={tweets}></SearchTweetsList>
        </div>
    );
}
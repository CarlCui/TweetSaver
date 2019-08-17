import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchTweetsSearchBar from './searchTweetsSearchbar.jsx';
import SearchTweetsList from './searchTweetsList.jsx';
import {fetchTweetService, verifyQuery} from '../../services/fetchTweetsService.js';

const useStyles = makeStyles({
    root: {
        height: "100%"
    }
});

export default function SearchTweetsContainer() {
    const classes = useStyles();

    const [tweets, setTweets] = React.useState([]);

    const onSearchClick = (textInput) => {
        fetchTweetService.fetchTweets(textInput)
            .then((tweets) => setTweets(tweets));
    };

    return (
        <div className={classes.root}>
            <SearchTweetsSearchBar onSearchClick={onSearchClick}></SearchTweetsSearchBar>
            <SearchTweetsList tweets={tweets}></SearchTweetsList>
        </div>
    );
}
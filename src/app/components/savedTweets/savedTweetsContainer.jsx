import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SavedTweetsList from './savedTweetsList.jsx';
import {useDrop} from 'react-dnd';
import {itemTypes} from '../../constants/dnd.js';
import {storeTweetsService} from '../../services/storeTweetsService.js';

const useStyles = makeStyles({
    root: {
        height: "100%"
    }
});

export default function SavedTweetsContainer () {
    const classes = useStyles();

    const [tweets, setTweets] = React.useState(storeTweetsService.getTweets());

    const [, drop] = useDrop({
        accept: itemTypes.TWEET,
        drop: (item) => onDrop(item),
    });

    const addtoSavedTweets = (newTweet) => {
        const tweetExists = tweets.findIndex((tweet) => tweet.id === newTweet.id) !== -1;

        if (!tweetExists) {
            const updatedTweets = tweets.slice();
            updatedTweets.push(newTweet);

            storeTweetsService.saveTweets(updatedTweets);

            setTweets(updatedTweets);
        }
    }

    const onDrop = (item) => {
        addtoSavedTweets(item.tweet);
    }

    return (
        <div ref={drop} className={classes.root}>
            <SavedTweetsList tweets={tweets}></SavedTweetsList>
        </div>
    );
}
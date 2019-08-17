import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListSubheader, Divider} from '@material-ui/core';
import TweetItem from '../tweetItem.jsx';

const useStyles = makeStyles({
    root: {
        height: "500px"
    }
});

export default function SavedTweetsList({tweets}) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <List
                subheader={<ListSubheader>Saved Tweets</ListSubheader>}>
                {
                    tweets.map((tweet, index) => (
                        <div key={tweet.id.toString()}>
                            <TweetItem tweet={tweet}></TweetItem>
                            <Divider />
                        </div>
                    ))
                }
            </List>
        </Paper>
    )
}
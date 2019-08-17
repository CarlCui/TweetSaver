import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {List, Divider} from '@material-ui/core';

import TweetItem from '../tweetItem.jsx';

const useStyles = makeStyles({
    root: {
        marginTop: "16px",
        height: "440px"
    },
    list: {
        padding: 0,
        maxHeight: '100%',
        overflowY: "scroll"
    }
});

export default function SearchTweetsList({tweets}) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <List className={classes.list}>
                {
                    tweets.map((tweet) => (
                        <div key={tweet.id.toString()}>
                            <TweetItem tweet={tweet} ></TweetItem>
                            <Divider />
                        </div>
                    ))
                }

            </List>
        </Paper>
    )
}
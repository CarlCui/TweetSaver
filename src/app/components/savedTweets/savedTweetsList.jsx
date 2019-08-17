import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListSubheader, Divider, Button} from '@material-ui/core';
import TweetItem from '../tweetItem.jsx';

const useStyles = makeStyles({
    root: {
        height: "100%"
    },
    list: {
        padding: 0,
        maxHeight: '100%',
        overflowY: "scroll"
    },
    subheader: {
        backgroundColor: "white",
        display: "flex"
    },
    subheaderLeft: {
        flexGrow: 1
    }
});

export default function SavedTweetsList({tweets, onClickClearAll}) {
    const classes = useStyles();

    const subHeader = (
        <ListSubheader className={classes.subheader}>
            <div className={classes.subheaderLeft}>Saved Tweets</div>
            <Button color="secondary" onClick={onClickClearAll}>CLEAR ALL</Button>
        </ListSubheader>
    )

    return (
        <Paper className={classes.root}>
            <List className={classes.list}
                subheader={subHeader}>
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
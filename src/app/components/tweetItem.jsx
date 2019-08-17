import React from 'react';
import {ListItem, ListItemAvatar, Avatar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import {useDrag} from 'react-dnd';
import {itemTypes} from '../constants/dnd.js';

const useStyles = makeStyles({
    contentBase: {
        width: "100%"
    },
    top: {
        display: 'flex',
    },
    userName: {
        fontSize: 14,
        maxWidth: 130,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    userScreenName: {
        fontSize: 13,
        color: grey[600],
        marginLeft: 4,
        maxWidth: 130,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    createdDate: {
        fontSize: 11,
        flex: "1 0 auto",
        textAlign: 'right'
    },
    text: {
        width: '312px',
        height: '45px',
        overflow: 'hidden',
        fontSize: '12px',
        textAlign: 'justify',
        lineHeight: 1.3
    }
});

export default function TweetItem({tweet}) {
    const classes = useStyles();

    const [{ isDragging }, drag] = useDrag({
        item: { type: itemTypes.TWEET, tweet: tweet },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const createdDate = new Date(tweet.createdAt);

    return (
        <ListItem ref={drag}>
            <ListItemAvatar>
                <Avatar src={tweet.user.profileImageURL} />
            </ListItemAvatar>
            <div className={classes.contentBase}>
                <div className={classes.top}>
                    <Typography className={classes.userName}>{tweet.user.name}</Typography>
                    <Typography className={classes.userScreenName}>@{tweet.user.screenName}</Typography>
                    <Typography className={classes.createdDate}>{createdDate.getMonth()}/{createdDate.getDay()}</Typography>
                </div>
                <div>
                    <Typography className={classes.text}>{tweet.text}</Typography>
                </div>
            </div>
        </ListItem>
    )
}
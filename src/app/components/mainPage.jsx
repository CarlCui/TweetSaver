import React from "react";
import {makeStyles} from '@material-ui/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt"
import SavedTweetsContainer from "./savedTweets/savedTweetsContainer.jsx";
import SearchTweetsContainer from "./searchTweets/searchTweetsContainer.jsx";

const panelWidth = 400;
const panelHeight = 550;

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        marginTop: "36px"
    },
    left: {
        width: panelWidth,
        height: panelHeight
    },
    middle: {
        width: "fit-content",
        marginTop: "100px",
        marginLeft: "16px",
        marginRight: "16px"
    },
    right: {
        width: panelWidth,
        height: panelHeight
    },
    arrow: {
        fontSize: "40px",
        marginLeft: "50px"
    }
})

const MainPage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.left}><SearchTweetsContainer></SearchTweetsContainer></div>
            <div className={classes.middle}>
                <Typography>Drag Tweets to Save</Typography>
                <ArrowRightAlt className={classes.arrow}></ArrowRightAlt>
            </div>
            <div className={classes.right}><SavedTweetsContainer></SavedTweetsContainer></div>
        </Container>
    )
}

export default MainPage;
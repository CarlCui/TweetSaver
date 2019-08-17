import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ErrorIcon from '@material-ui/icons/Error';
import red from '@material-ui/core/colors/red';
import { verifyQuery, ErrorMessageOnInvalidQuery } from '../../services/fetchTweetsService.js';

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    textField: {
        width: "100%"
    },
    input: {
        marginLeft: 16,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    errorIcon: {
        padding: 10,
        color: red[700]
    }
});

export default function searchTweetsSearchBar({onSearchClick}) {
    const classes = useStyles();

    const [textInput, setTextInput] = React.useState("");
    const [inputError, setInputError] = React.useState(false);

    const onTextInputChange = (event) => {
        const newText = event.target.value;

        setTextInput(newText);

        if (newText.length > 0) {
            const validInput = verifyQuery(newText);

            setInputError(!validInput);
        } else {
            setInputError(false);
        }

    }

    const searchAdorment = (
        <InputAdornment position="end">
            <IconButton className={classes.iconButton} aria-label="search"
                onClick={() => onSearchClick(textInput)}>
                <SearchIcon />
            </IconButton>
        </InputAdornment>
    );

    const errorAdorment = (
        <InputAdornment position="end">
            <ErrorIcon className={classes.errorIcon}></ErrorIcon>
        </InputAdornment>
    );

    return (
        <div className={classes.root}>
            <TextField className={classes.textField}
                variant="outlined"
                error={inputError}
                label="Search Tweets"
                onChange={onTextInputChange}
                helperText={inputError ? ErrorMessageOnInvalidQuery : "Hit search button or press ENTER"}
                InputProps={{
                    endAdornment:
                        inputError ? errorAdorment : searchAdorment
                }}
                onKeyUp={(event) => !inputError && event.key === 'Enter' && onSearchClick(textInput)}
            />
        </div>
    );
}
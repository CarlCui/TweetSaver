import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

export default function searchTweetsSearchBar({inputError, onSearchClick}) {
  const classes = useStyles();

  const [textInput, setTextInput] = React.useState("");

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search tweets"
        inputProps={{ 'aria-label': 'search tweets' }}
        error={inputError}
        onChange={(event) => {setTextInput(event.target.value)}}
      />
      <IconButton className={classes.iconButton} aria-label="search"
                  onClick={() => onSearchClick(textInput)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
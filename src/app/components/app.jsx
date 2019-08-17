
import React from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import MainPage from './mainPage.jsx';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Tweet Saver
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <DndProvider backend={HTML5Backend}>
          <MainPage></MainPage>
        </DndProvider>
      </div>
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('#app'));

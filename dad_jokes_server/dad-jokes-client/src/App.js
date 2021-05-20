// React imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Custom Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Jokebox from './components/Jokebox';
import JokeForm from './components/JokeForm';
import APIDocs from './components/APIDocs';
//Style imports
import {createUseStyles} from 'react-jss';
import './App.css';

const useStyles = createUseStyles({
    container: {
      height: '79vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <div className={ classes.container }>
        <Switch>
          <Route 
            exact 
            path="/"
            render={ () => (
              <Jokebox />
            )}
          />
          <Route 
            exact 
            path="/newjoke"
            render={ () => (
              <JokeForm />
            )}
          />
          <Route 
            exact 
            path="/docs"
            render={ () => (
              <APIDocs />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

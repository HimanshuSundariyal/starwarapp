import React from 'react';
import './App.css';
import Login from './components/login'
import SearchResult from './components/search' 
import NoMatch from './components/404' 
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/search" component={SearchResult} />
                <Route path="/" component={NoMatch} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
  );
}
export default App;
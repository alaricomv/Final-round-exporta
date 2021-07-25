import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './user';
import Exporta from './exporta_page';

const Webpages = () => {
    return(
        <Router>
            <Route exact path = "/" component = {Exporta} />
            <Route path = "/user" component = {User} />
        </Router>
    );
};
export default Webpages;
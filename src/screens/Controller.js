import React from "react";
import Header from '../common/Header/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../screens/home/Home"

const Controller = () =>{
    return(
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
            
        </div>
    );
}

export default Controller;
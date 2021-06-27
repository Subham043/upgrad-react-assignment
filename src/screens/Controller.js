import React, {useState} from "react";
import Header from '../common/Header/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../screens/home/Home"
import Details from "../screens/details/Details"
import Store from "../store"

const Controller = () =>{

    const [viewBtn, setViewBtn] = useState(true)

    return(
        <div>
            <Store>
            <Header btnView={viewBtn} />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:id" exact component={Details} />
                </Switch>
            </Router>
            </Store>
        </div>
    );
}

export default Controller;
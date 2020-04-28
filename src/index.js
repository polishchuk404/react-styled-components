import React from 'react';
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import ReactDOM from "react-dom"
import {HashRouter,Switch,Route} from "react-router-dom"

ReactDOM.render(
    <>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={SignIn}/>
                <Route path="/register" component={SignUp}/>
            </Switch>

        </HashRouter>
    </>,
document.getElementById('root'));
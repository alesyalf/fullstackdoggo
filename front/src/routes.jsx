import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App2 from "./App";
import {STRUCTURE} from "./constants";
import {_Memes} from "./components/Memes"
import {_Videos} from "./components/Videos"
import {_Login} from "./components/Login"

const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App2}/>
        <Route path={STRUCTURE.memes.route} component={_Memes}/>
        <Route path={STRUCTURE.videos.route} component={_Videos}/>
        <Route path={STRUCTURE.login.route} component={_Login}/>

    </Switch>
);

export default withRouter(MainRouter);

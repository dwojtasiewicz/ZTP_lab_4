import React from 'react';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from "./containers/LoginPage/Login";
import Dashboard from "./containers/Dashboard";
import Protected from "./Protected";
import NotAuth from "./containers/ErrorPages/NotAuth";
import DashboardAdmin from "./containers/DashboardAdmin";

function App() {
    return (
        <Router>
            <Switch>
                //Login
                <Route path="/login" component={LoginPage}/>
                <Route path="/" exact component={LoginPage}/>
                //Dashboard
                <Protected path="/dashboardAdmin" roles ={["ROLE_ADMIN"]} component={DashboardAdmin} />
                <Protected path="/dashboard" roles ={["ROLE_USER"]} component={Dashboard} />
                //Default
                <Route path="/NotAuth" exact component={NotAuth}/>
                <Route path="*" component={() => "404 not found!"}/>
            </Switch>
        </Router>
    );
}

export default App;

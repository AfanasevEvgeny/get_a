import logo from './logo.svg';
import React from "react"
import './App.scss';
import Login from "./Components/Login/Login";
import {Route} from "react-router-dom";
import MainContent from "./Components/MainContent/MainContent";
// bootsrtap

//import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const App = (props) => {
    return (
        <div className="App-wrapper">
            <Route path='/login' render={() => <Login loginPage = {props.state.loginPage} dispatch={props.dispatch}/>}/>
            <Route path='/main' render={() => <MainContent/>}/>
        </div>
    );
}

export default App;

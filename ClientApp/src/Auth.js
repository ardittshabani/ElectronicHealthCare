import { useState } from "react";
import DoctorPage from "./DoctorPage/Index";
import PacientiPage from "./PacientPage/Index";
import Login from "./LoginPage/Login"
import { History } from "history";
import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch,
    useHistory} from 'react-router-dom';

export default function Authentification(){
    

    return(
        <>
            <Router>
                <Switch>
                    <Route exact path="/" 
                        component={Login} />
  
                    <Route exact path="/pacienti/:id" 
                        component={PacientiPage} />

                    <Route exact path="/mjeku/:id" 
                        component={DoctorPage} />    
                </Switch>
            </Router>
        </>
    )
}





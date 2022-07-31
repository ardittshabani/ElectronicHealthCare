import React from "react";
import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch} from 'react-router-dom';
import Chris from "../Asetet/xemi.jpg"; 
import Time from "../Asetet/clock.png";  

function Terminet(props){
    return(
        <>
        <div className="w-100 h-100 p-4" >
            <p className="fs-2">Terminet</p>
            <Router>
            <div className="container d-fl ">
                <nav>
                    <ul className="d-flex nav-tabs">
                        <li className="mx-3 nav-item">
                            <Link className="badge badge-secondary nav-link fs-4 fw-normal" to={'/Today'}>Today</Link>
                        </li>
                        <li className="mx-3 nav-item">
                            <Link className="badge nav-link fs-4 fw-normal" to={'/canceled'}>Canceled</Link>
                        </li>
                        <li className="mx-3 nav-item">
                            <Link className="badge nav-link fs-4 fw-normal" to={'/Done'}>Done</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <Switch>
                    <Route exact path='/Today' component={Today } />
                    <Route path='/Canceled' component={Canceled} />
                    <Route path='/Done' component={Done} />
                </Switch>
            </div>
            </Router>
        </div>
        </>
    )
}

function Today(){
    return(
        <>
        <div className="container w-100 d-flex flex-wrap h-100 p-0 div-terminet">
            <Termini/>
            <Termini/>
            <Termini/>
            <Termini/>
            <Termini/>
            <Termini/>
            <Termini/>
            <Termini/>
        </div>
        </>
    )
}

function Canceled(){
    return(
        <>
        <p>Canceled</p>
        </>
    )
}

function Done(){
    return(
        <>
        <p>Done</p>
        </>
    )
}

function Termini(){
    return(
        <>
        <div className="border div-termini m-1 p-2">
            <div className="container d-flex justify-content-end">
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">:</button>
                <ul class="dropdown-menu">
                
                </ul>
                </div>
            </div>
            <div className="container d-flex align-content-center">
            <img src={Chris} className="m-1 profil-photo" width="30px" height="30px"/>
                <p className="text.center m-1 fs-5">Ardit Shabani</p>
            </div>
            <div className="container d-flex align-content-center m-2">
                <p className="fs-5 m-1">Title :</p>
                <p className="fs-5 m-1">Title</p>
            </div>
            <div className="container d-flex align-content-center align-items-center">
                <img className="m-2" src={Time} width='25px' height="25px"></img>
                <p className="text.center m-1 fs-5">10:54</p>
            </div>
        </div>
        </>
    );
}



export default Terminet;
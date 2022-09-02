import Azem from "../Asetet/xemi.jpg"
import Done from "../Asetet/correct.png"
import Canceled from "../Asetet/cancel.png"
import { useState , useEffect} from "react";
import axios from "axios";
import Time from "../Asetet/clock.png";
import Data from "./JSON/Data.json";
import TerminData from "./JSON/Termin.json"
import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch} from 'react-router-dom';
import NewTermin from "./Components/AddNewTermin";

function Terminet(props){

    const [Trigger, setTrigger] = useState(true)

    return(Trigger) ?(
        <>
        <div className="w-100 h-100 p-4" >
            <p className="fs-2">Terminet</p>
            <Router>
            <div className="container d-fl ">
                <nav className="d-flex justify-content-between">
                    <ul className="d-flex nav-tabs">
                        <li className="mx-3 nav-item">
                            <Link className="badge badge-secondary nav-link fs-4 fw-normal text-secondary" to={'/Today'}>This Month</Link>
                        </li>
                        <li className="mx-3 nav-item">
                            <Link className="badge nav-link fs-4 fw-normal" to={'/TerminAll'}>All</Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-danger btn-sm px-4 mb-3 me-3" onClick={()=> setTrigger(false)}>+ New Termin</button>
                    </div>
                </nav>
            </div>
            <div className="container scroll-table">
                <Switch>
                    <Route exact path='/Today' component={Today } />
                    <Route path='/TerminAll' component={TerminAll} />
                </Switch>
            </div>
            </Router>
        </div>
        </>
    ):<NewTermin click={() => setTrigger(true)}/>
}

function TerminAll(props){
    const [Terminet, setTerminet] = useState(TerminData);
    return (
        <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Patient</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {Terminet.map(ter => <TerminTable key={ter.id} foto={Azem} date={ter.data} title={ter.titulli} doctor={`${ter.doktori.emri} ${ter.doktori.mbiemri}`} pacient={`${ter.pacienti.emri} ${ter.pacienti.mbiemri}`} status={ter.status}/>)}
            </tbody>
        </table>
        </>
    );
}
  
function TerminTable(props){
    return(
        <>
        <tr className="border-bottom-0 border-success border-top-0 border-end-0 border-5" style={{backgroundColor: "#6c757d8a"}}>
            <td><img className="rounded-circle me-2" width="30px" src={props.foto}/>{props.pacient}</td>
            <td><img className="rounded-circle me-2" width="30px" src={props.foto}/>{props.doctor}</td>
            <td>{props.date}</td>
            <td>{props.title}</td>
            <td>
                <img src={(props.status == 'Done')?Done:Canceled} width='25px' height='25px'/>
            </td>
        </tr>
        </>
    );
}

function Today(){

    const [terminID, setTerminID] = useState(false);

    const [terminData, setTerminData] = useState(Data);

    const [terminspecific, setTerminSpecific] = useState({
        emri: "",
        mbiemri: "",
        title: "",
        time: "",
        status: "",
        body: "",
    });

    return(
        <>
        <div className="container w-100 d-flex flex-wrap h-100 p-0 div-terminet ">
            <TerminiCard foto={Azem} emri='Ardit' mbiemri='Shabani' time='10:45' title="Control" 
            trigger={!terminID}
            onclick={() => {
                setTerminID(true); 
            }}/>
            {terminData.map(ter => <TerminiCard key={ter.id} foto={Azem} emri={ter.emri} mbiemri={ter.mbiemri} time={ter.time} title={ter.title} trigger={!terminID} onclick={() => {setTerminID(true); }}/>)}
        </div>
        <TerminID onclick={() => setTerminID(false)} trigger={terminID}/>
        </>
    )
}

function TerminiCard(props){ 
    return(props.trigger) ?(
        <div 
            className="termini-card  m-1 py-3"
            onClick={props.onclick}
            >
            <div className="container d-flex">
                <img className="mx-auto mt-2 rounded" src={props.foto} width="70px" height="70px"/>
            </div>
            <p className="fs-4 text-white m-2">{props.emri}&nbsp;{props.mbiemri}</p>
            <p className="fs-6 text-white m-2">Title :&nbsp;{props.title}</p>
            <div className="d-flex justify-content-around">
                <p className="fs-6 text-black">Today</p>
                <div className="d-flex">
                    <img className="mt-1" src={Time} width='20px' height='20px'/>
                    <p className="fs-6 text-white ms-1">{props.time}</p>
                </div>
            </div>
        </div>
    ):"";
}

function TerminID(props){
    return(props.trigger)?(
        <div className="container mx-auto w-50">
            <button onClick={props.onclick} className="">Back</button>
            <div className="d-flex">
                <p className="fs-4">Emri</p>
                <p>{props.emri}&nbsp;{props.mbiemri}</p>
            </div>
        </div>
    ):"";
}

export default Terminet;    
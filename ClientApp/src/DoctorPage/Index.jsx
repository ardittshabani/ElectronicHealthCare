import Home from "./Home";
import Terminet from "./Terminet";
import Pacientat from "./Pacientat";
import Homeimg from "../Asetet/home.png";
import Diag_img from "../Asetet/checkup.png";
import Lab_img from "../Asetet/experiment.png";
import { useState} from "react";
import {useParams } from "react-router-dom"
import doctor from "../Asetet/doctor1.jpg"
import logout from "../Asetet/logout.png"
import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch,
    useHistory} from 'react-router-dom';
import Logo from '../components/logo';

export default function DoctorPage () {

  const {id} = useParams()

  const history = useHistory();

    const Logout = () =>{
        history.push(`/`)
    }
  
    return (
        <>
        <div className='container-fluid first-div d-flex align-items-start'>
      <Router>
      <div className='container left-div ' >
        <Logo/>     
        <nav className='navbar '>
          <ul className='w-90 ul-fluid w-100 p-1' >
            <li className='nav-item my-2 p-2' >
              <img src={Homeimg} width="30px" height="30px" className='mb-2'/>
              <Link  className='badge nav-link fs-4 fw-normal' to={`/${id}`} >Home</Link>
            </li>
            <li className='nav-item my-2 p-2'>
            <img src={Diag_img} width="30px" height="30px" className='mb-2'/>
              <Link className='badge nav-link fs-4 fw-normal' to={`/Pacientat/${id}`} >Pacientat</Link>
            </li>
            <li className='nav-item my-2 p-2'>
            <img src={Lab_img} width="30px" height="30px" className='mb-2'/>
              <Link className='badge nav-link fs-4 fw-normal' to={`/Terminet/${id}`} >Terminet</Link>
            </li>
            <li className='nav-item my-2 p-2 mt-5'>
            <img src={logout} width="30px" height="30px" className='mb-2'/>
              <Link className='badge nav-link fs-5 fw-normal' to={'/Login'} 
                onClick={()=> Logout()}
              >Log out</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='right-div container  d-inline-flex'>  
        <Switch>
            <Route exact path='/:id' component={Home} />
            <Route path='/Pacientat/:id' component={Pacientat} />
            <Route path='/Terminet/:id' component={Terminet} />
        </Switch>
      </div>
      </Router>
    </div>
        </>
    );
}
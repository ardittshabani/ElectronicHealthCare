import Home from './Home'
import Diagnoza from "./Diagnoza";
import Terminet from "./Terminet"
import Homeimg from "../Asetet/home.png"
import Diag_img from "../Asetet/checkup.png"
import Lab_img from "../Asetet/experiment.png"
import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch} from 'react-router-dom';
import Logo from '../components/logo';

export default function PacientiPage () {
    return (
        <>
        <div className='container-fluid first-div d-flex align-items-start'>
      <Router>
      <div className='container left-div ' >
        <Logo/>
        <nav className='navbar'>
          <ul className='w-90 ul-fluid w-100 p-1' >
            <li className='nav-item my-2 p-2' >
              <img src={Homeimg} width="30px" height="30px" className='mb-2'/>
              <Link  className='badge nav-link fs-4 fw-normal' to={'/'} >Home</Link>
            </li>
            <li className='nav-item my-2 p-2'>
            <img src={Diag_img} width="30px" height="30px" className='mb-2'/>
              <Link className='badge nav-link fs-4 fw-normal' to={'/Diagnoza'} >Diagnoza</Link>
            </li>
            <li className='nav-item my-2 p-2'>
            <img src={Lab_img} width="30px" height="30px" className='mb-2'/>
              <Link className='badge nav-link fs-4 fw-normal' to={'/Terminet'} >Terminet</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='right-div container  d-inline-flex'>  
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Diagnoza' component={Diagnoza} />
            <Route path='/Terminet' component={Terminet} />
        </Switch>
      </div>
      </Router>
    </div>
        </>
    );
}
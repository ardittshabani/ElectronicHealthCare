import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch} from 'react-router-dom';

function Login(){

    return(
        <>
            <div className='container-fluid-xxl w-100 h-100 d-flex'>
                <div className='container w-50 h-100 border'>

                </div>
                <div className='container w-50 h-100 border p-5'>
                    <Router>
                      <div className='container d-flex justify-content-center'>
                        <nav>
                            <ul className='d-flex nav-tabs'>
                                <li className='nav-item'>
                                    <Link className='badge nav-link text-black' to={'/Signin'}>Sign in</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='badge nav-link text-black' to={'Register'}>Register</Link>
                                </li>
                            </ul>
                        </nav>
                      </div>
                      <div className='container'>
                        <Switch>
                            <Route exact path='/Signin' component={SignIn}/>
                            <Route path='/Register' component={Register}/>
                        </Switch>
                      </div>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default Login;

function SignIn(){
    return(
        <>  
            
            <div className='container d-flex justify-content-center'>
                <form className=''>
                    <label className='d-block' htmlFor="">Username</label>
                    <input className='d-block' type='username'/>
                    <label className='d-block' htmlFor="">Password</label>
                    <input  className='d-block' type='password'/>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </>
    );
}

function Register(){
    return(
        <>
            <div className='container d-flex justify-content-center'>
                <form className=''>
                    <label className='d-block' htmlFor="">ID</label>
                    <input className='d-block' type='id'/>
                    <label className='d-block' htmlFor="">Username</label>
                    <input className='d-block' type='email'/>
                    <label className='d-block' htmlFor="">Password</label>
                    <input className='d-block' type='email'/>
                    <label className='d-block' htmlFor="">ConfirmPasword</label>
                    <input className='d-block' type='email'/>
                    <button className='btn btn-success'>Register</button>
                </form>
            </div>
        </>
    );
}
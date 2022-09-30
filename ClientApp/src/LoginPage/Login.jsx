import {
    BrowserRouter as Router,
    Routes, HashRouter,
    Route,
    Link, 
    Switch,
    useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import foto from "../Asetet/wallpaper.jpg"

function Login(props){

    const [username, setusername] = useState("");
    const [pasword, setpasword] = useState("");

    const [id, setID] = useState(0);

    const history = useHistory();

    const Pacient = () =>{
        history.push(`/pacienti/${id}`)
    }

    const Mjeku = () =>{
        history.push(`/mjeku/${id}`)
    }

    useEffect(async () =>{
        setID(await Userlog(username, pasword))
    }, [username, pasword])

    return(
        <>
            <div className=' w-100 d-flex login-div' style={{"backgroundColor": "#fafafa", "height": "720px"}}>
                <div className='w-50 d-flex align-items-center '>
                    <img src={foto} width='400' height='400' className='ms-3'/>
                </div>
                <div className=' w-50 h-50 m-auto  '>
                        <h1 className='text-primary'>Welcome Please Log in</h1>
                      <div className=' mt-5'>
                        <PatientL username={username} pasword={pasword}
                            onchangeu={(e)=>setusername(e.target.value)} onchangem={(e)=>setpasword(e.target.value)}
                            onclick={ async ()=>{
                                const i = await Userlog(username, pasword);
                                if(i == 0){
                                    return null;
                                }else if(await PacientIdentifier(i)){
                                    setID(i);
                                    Pacient();
                                }else if(await MjekuIdentifier(i)){
                                    setID(i);
                                    Mjeku();
                                }
                            }}
                        />
                      </div>
                </div>
            </div>
        </>
    )
}

export default Login;

function PatientL(props){
    
    return(
        <>  
            <div className='container d-flex justify-content-center mt-5'>
                <form className='input-group d-block w-50 m-auto'>
                    <label className='fw-light mb-1' htmlFor="Username">Username</label>
                    <input id='Username' className='form-control w-100 mb-3' type='username'
                        value={props.username} onChange={props.onchangeu}
                        />
                    <label className='fw-light mb-1' htmlFor="Password">Password</label>
                    <input id='Password' className='form-control w-100' type='password' 
                        value={props.pasword} onChange={props.onchangem}/>
                    <div className='d-flex justify-content-center mt-4'>
                        <button className='btn btn-success'
                            type='button'
                            onClick={props.onclick}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}



async function  Userlog(username, pasword){
    
    
    try {
        const { data } = await axios.get(`https://localhost:7053/api/User/user?username=${username}&pasword=${pasword}`
   ).catch(error =>{
    console.log(error)
   });

    if (data == undefined){
        return 0;
    }

    return data;
    } catch (error) {
        console.log(error);
    }
}

async function PacientIdentifier(id){
    if (id == undefined){
        return false
    }
    try {
        const { data } = await axios.get(`https://localhost:7053/api/Pacientis/${id}`
        ) 
        if (data == undefined){
            return false;
        }
        return true
    } catch (error) {
        console.log(error);
    }
}

async function MjekuIdentifier(id){
    if (id == undefined){
        return false;
    }

    try {
        const { data } = await axios.get(`https://localhost:7053/api/Mjekus/${id}`
        ) 
        if (data == undefined){
            return false;
        }
        return true
    } catch (error) {
        console.log(error);
    }
}





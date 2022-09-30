import react from "react";
    import Chris from "../Asetet/xemi.jpg";
import Remain from "../Asetet/remain.png";
import Visited from "../Asetet/examination.png";
import Cancel from "../Asetet/cancel.png";
import Appointment_img from "../Asetet/appointment-medical.png"
import Today from "../components/RemindMe";
import Doctor from "../Asetet/doctor1.jpg"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";


function Home(){
    const {id} = useParams();

    const [mjeku, setMjeku] = useState({});

    useEffect(()=>{
        axios.get(`https://localhost:7053/api/Mjekus/${id}`).then((result)=>{
            setMjeku(result.data);
        });
    },[])
    
    return(
        <>
        <div id="p-data" className="container w-75 h-100  m-1 ">
           <div className="container d-inline-flex align-items-start w-100 h-50">
                <div className="container border w-50 h-100 mx-1 div-home">
                    <div className="container align-content-center">
                        <img src={Doctor} className="rounded-circle mx-auto d-block mt-2" width="100px" height="100px"/>
                        <p className="text-black fs-4 mx-auto d-block my-0 text-center" ></p>
                        <p className="text-primary mx-auto d-block text-center my-0" >2548-789-356</p>
                    </div>
                    <div className="container">
                        <p className="text-left mx-3 border-bottom flex-inline mb-2">Detajet</p>
                        <div className="container d-flex justify-content-between ">
                            <p className="ms-3">Mosha</p>
                            <p className="me-3">58</p>
                        </div>
                        <div className="container d-flex justify-content-between ">
                            <p className="ms-3">Specializimi</p>
                            <p className="me-3">{mjeku.specializimi}</p>
                        </div>
                        <div className="container d-flex justify-content-between ">
                            <p className="ms-3">Email</p>
                            <p className="me-3">{mjeku.email}</p>
                        </div>
                        <div className="container d-flex justify-content-between ">
                            <p className="ms-3">Telefoni</p>
                            <p className="me-3">{mjeku.nrTelefonit}</p>
                        </div>
                    </div>
                </div>
                <div id="cal-data" className="container border w-50 h-100 mx-1 div-home p-3">
                   <CalcData foto1={Appointment_img} foto2={Visited} value1={9} value2={5} title1={"Total Appointments"} title2={"Visitet Patients"}/>
                   <CalcData foto1={Cancel} foto2={Remain} value1={9} value2={5} title1={"Cancled"} title2={"Remaining Patients"}/>
                </div>
           </div>
            <div className="container border w-100 ms-1 me-2 my-2 div-home d-block" style={{height:'49% '}}>
                
            </div>
        </div>
        <div className="container w-25 border h-100 m-1 div-home p-1">
            <p className="text-black fw-light ms-2" >Remind me</p>
            <Remind/>
        </div>
        </>
    );
}

function Remind(){
    return(
        <>
        <div className="container px-1">
            <p>Today</p>
            <Today foto={Chris} name="Azem" date="04/03/2022" time="14:30"/>
            <Today foto={Chris} name="Ardit" date="04/03/2022" time="15:30"/>
            <Today foto={Chris} name="Mike" date="04/03/2022" time="16:00"/>
            <Today foto={Chris} name="Brannan" date="04/03/2022" time="17:00"/>
        </div>
        </>
    );
}

function CalcData(props){
    return(
        <>
        <div className="container  h-50 d-flex mt-2">
            <CalcDataDivs foto={props.foto1} value={props.value1} title={props.title1}/>
            <CalcDataDivs foto={props.foto2} value={props.value2} title={props.title2}/>
        </div>
        </>
    );
}
    
function CalcDataDivs(props){
    return (
        <>
        <div className="container  m-0 ">
            <div className="container  m-0 d-flex justify-content-center align-items-center">
            <img src={props.foto} className="mt-1" width="70px" height="70px"/>
            </div>
            <div className="container  d-flex align-content-center ps-4 ">
                <p className="text-danger fs-1 fw-light m-1">{props.value}</p>
                <p className="mt-4 ms-1 fs-6">{props.title}</p>
            </div>
        </div>
        </>
    )
}



export default Home;


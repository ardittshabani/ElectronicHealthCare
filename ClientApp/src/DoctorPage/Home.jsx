import react from "react";
import Chris from "../Asetet/xemi.jpg";
import Puls from "../Asetet/heart-beat.png";
import O2 from "../Asetet/oxygen-tank.png";
import HeartBeat from "../Asetet/heart-rate.png";
import Today from "../components/RemindMe";
import Doctor from "../Asetet/doctor1.jpg"
import {useState} from "react";


function Home(props){
    return(
        <>
        <div id="p-data" className="container w-75 h-100  m-1 ">
           <div className="container d-inline-flex align-items-start w-100 h-50">
                <div className="container border w-50 h-100 mx-1 div-home">
                    <div className="container align-content-center">
                        <img src={Doctor} className="rounded-circle mx-auto d-block mt-2" width="100px" height="100px"/>
                        <p className="text-black fs-4 mx-auto d-block my-0 text-center" >John Simpson</p>
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
                            <p className="me-3">Internist</p>
                        </div>
                        <div className="container d-flex justify-content-between ">
                            <p className="ms-3">Email</p>
                            <p className="me-3">john4@gmial.com</p>
                        </div>
                        <div className="container d-flex justify-content-between ">
                            <p className="ms-3">Telefoni</p>
                            <p className="me-3">+38344123456</p>
                        </div>
                    </div>
                </div>
                <div id="cal-data" className="container border w-50 h-100 mx-1 div-home ">
                    <div className="container-fluid h-25 my-3 d-flex" >
                        <div id="span1" className=" span-elem d-flex align-items-center justify-content-center">
                            <img  src={Puls} width='50px' height='50.px'></img>
                        </div>
                        <div >
                            <p className="fw-bold my-0 mx-3 p-0">Heart Beat</p>
                            <p className="fs-1 align-bottom my-0 mx-4 p-0 text-danger">90 b/s</p>
                        </div>
                    </div>
                    <div className="container-fluid h-25 my-3 d-flex">
                        <div id="span2" className=" span-elem d-flex align-items-center justify-content-center">
                        <img  src={O2} width='50px' height='50.px'></img>
                        </div>
                        <div >
                            <p className="fw-bold my-0 mx-3 p-0">Oxygen Percentage</p>
                            <p className="fs-1 align-bottom my-0 mx-4 p-0 text-primary">105%</p>
                        </div>
                    </div>
                    <div className="container-fluid h-25 my-3 d-flex">
                        <div id="span3" className=" span-elem d-flex align-items-center justify-content-center">
                        <img  src={HeartBeat} width='50px' height='50.px'></img>
                        </div>
                        <div >
                            <p className="fw-bold my-0 mx-3 p-0">Blood Preasure </p>
                            <p className="fs-1 align-bottom my-0 mx-4 p-0 text-danger">120/80</p>
                        </div>
                    </div>
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



export default Home;
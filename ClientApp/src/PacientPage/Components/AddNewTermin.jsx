import { useEffect, useState } from "react";
import { disable } from "workbox-navigation-preload";
import DoctorData from "../JSON/Doctor.json"
export default function NewTermin(props){
    return(
        <div className="w-100">
            <button className="btn text-primary" onClick={props.click}>{'<< Back'}</button>
            <div className="mb-4">
                <p className="fs-1 text-center fw-light mb-0">Add New Apointment</p>
                <p className="text-center mt-0 text-secondary">Please fill the form</p>
            </div>
            <div className="w-100 scroll-table">
                <form className="w-50 mx-auto">
                    <fieldset style={{border: '2px solid blue'}} className="p-4 mb-5">
                        <legend>Personal Information</legend>
                        <div className="mb-5">
                            <label className="text-primary fs-4">Name</label>
                            <div className="d-flex">
                                <input id="form-first-name " className="form-control form-control-lg     mx-1" placeholder="First"/>
                                <input id="form-last-name" className="form-control form-control-lg mx-1" placeholder="Last"/>
                            </div>
                        </div>
                        <div>
                            <label className="text-primary fs-4">Number</label>
                            <div className="d-flex">
                                <input id="form-first-name" className="form-control form-control-lg" placeholder="+383 4x xxx xxx"/>
                            </div>
                        </div>
                    </fieldset>
                    <DoctorForm/>
                    <PickDate/>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-success btn-lg px-5">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function DoctorForm(props){
    const specialists = ['Internist', 'Gynecologists', 'Neurologists', 'Radiologists', 'Pediatricians', 'Cardiologists']

    const [showDoctor, setShowDoctors] = useState('Chose One ..');

    const [triger, setTriger] = useState(true)

    function x () {
        for(let i = 0; i< specialists.length; i++){
            if (showDoctor == specialists[i]) {
                setTriger(false)
                return;
            }else{
                setTriger(true);
            }
        }
    }

    useEffect(()=>{
        x();
    },[showDoctor])
    return(
        <fieldset style={{border: '2px solid blue'}} className="p-4 mb-5">
            <legend>Chose Doctor</legend>
            <div className="mb-5">
                <label className="text-primary fs-4">Chose Specialist</label>
                <select id="select-specialist" className="form-select form-select-lg" 
                onChange={(e)=> setShowDoctors(e.target.value)}
                >
                    <option defaultValue="Chose" >Chose one ...</option>
                    {specialists.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
            <div className="mb-5">
                <label className="text-primary fs-4">Chose Doctor</label>
                <SelectDoctor  trigger={triger} category={showDoctor}/>
            </div>
        </fieldset>
    )
}

function SelectDoctor(props){ 
    function Doctors (DoctorData, category){
        var x = []; 
        for (let i=0; i< DoctorData.length; i++){
            if (category == DoctorData[i].specializimi){
                x.push(DoctorData[i])
            }
        }return x;
    }

    const x = Doctors(DoctorData, props.category);

    return(
        <select className="form-select form-select-lg" disabled={props.trigger} aria-label="Default select example">
            {x.map( m => <option key={m.id} value={m.id}>{m.emri} {m.id}</option>)}
        </select>
    )
}

function PickDate(){
    return(
        <fieldset style={{border: '2px solid blue'}} className="p-4">
        <legend>Pick a Time</legend>
        </fieldset>
    )
}

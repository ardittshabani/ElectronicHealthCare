import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddPatients from "./Components/AddPatients.jsx"
import PacientValue from "./JSON copy/PacientValue.json"

function Pacientat(props){
    const [pacientat, setPacientat] = useState(PacientValue);

    /*useEffect(() => {
        axios.get('https://localhost:7053/api/Pacientis').then(res =>{
            setPacientat(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])*/

    //Boolean variable determines if Add or Edit
    const [editorAdd, setEditorAdd] = useState(true);

    //Boolean varibale determines if Add or the list
    const [AddPatientPage, setAddPatientPage] = useState(true);

    //Boolean variable which determines DeletePopUp
    const [buttonDeletePopup, setbuttonDeletePopup] = useState(false);

    const [EditValue, setEditValue] = useState({
        id: null,
        emri: null,
        mbiemri: null,
        data_lindjes: null,
        gjinia: null,
        numri: null,
        email: null,
        adress: {
            rruga: null,
            city: null,
            zipCode: null,
        },
        weight: null,   
        height: null
    })

    return(AddPatientPage)?(
        <>
        <div className="container  w-100 h-100 d-flex">
            <div className="container p-5 pe-2 pt-4  w-75">
                <div className="container  h-100 p-2 ">
                    <div className="container d-flex justify-content-between pe-3">
                        <p className="fs-5">My Patients</p>
                       <button onClick={() =>{ setAddPatientPage(false); setEditorAdd(true); setEditValue({
                        id: null,
                        emri: null,
                        mbiemri: null,
                        data_lindjes: null,
                        gjinia: null,
                        numri: null,
                        email: null,
                        adress: {
                            rruga: null,
                            city: null,
                            zipCode: null,
                        },
                        weight: null,   
                        height: null
                       })}}  className="btn btn-lg btn-outline-success px-2 mb-2">+ ADD PATIENT</button>
                    </div>
                    <div className="scroll-form">
                    <table className="table table-stripied table-light">
                        <thead>
                            <tr className="">
                                <th>ID</th>
                                <th>Emri</th>
                                <th>Data Lindjes</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {pacientat.map(pac => 
                            <Pacienti key={pac.id} 
                            id={pac.id} emri={pac.emri} mbiemri={pac.mbiemri} data_lindjes={pac.dataLindjes} 
                            edit={() => {
                                setAddPatientPage(false);
                                setEditValue({
                                    id: pac.id,
                                    emri: pac.emri,
                                    mbiemri: pac.mbiemri,
                                    data_lindjes: pac.dataLindjes,
                                    gjinia: pac.gjinia,
                                    numri: pac.numri,
                                    email: pac.email,
                                    adress: {
                                        rruga: pac.rruga,
                                        city: pac.city,
                                        zipCode: pac.zipCode,
                                    },
                                    weight: pac.weight,   
                                    height: pac.height
                                });
                                setEditorAdd(false);
                            }}
                            delete={() => {
                                setbuttonDeletePopup(true);
                            }}
                            />)}
                        </tbody>
                    </table>
                    </div>                
                </div>
            </div>
            <DeletePopup trigger={buttonDeletePopup} no={() => setbuttonDeletePopup(false)}/>
        </div>
        </>
    ):<AddPatients onclick={() => setAddPatientPage(true) } 
        triger={!AddPatientPage}
        value={EditValue}
        h1={editorAdd}/>;

}

/**Simple Pacienti row of table */
function Pacienti(props){ 
    return(
        <>
        <tr className="">
            <td>{props.id}</td>
            <td>{props.emri} {props.mbiemri}</td>
            <td>{props.data_lindjes}</td>
            <td>
                <button onClick={props.edit} className=" btn btn-sm bg-secondary py-1 mx-1 px-2 ">Edit</button>
                <button onClick={props.delete} className="btn btn-sm bg-danger py-1 mx-1 px-2" >Delete</button>
            </td>
        </tr>
        </>
    )
}

/*Delete Popup*/ 
function DeletePopup(props){
    return(props.trigger) ? (
        <div className="container position-absolute d-flex justify-content-center start-50 top-50 translate-middle">
                <div className="bg-secondary py-4 px-5">
                    <p>Delete this Patient :</p>
                    <p>{props.emri} &nbsp; {props.mbiemri}</p>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-danger ">Yes</button>
                        <button onClick={props.no} className="btn btn-dark ">No</button>
                    </div>
                </div>  
            </div>
    ):"";
}

export default Pacientat;
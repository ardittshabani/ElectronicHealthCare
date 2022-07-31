import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pacientat(props){
    const [pacientat, setPacientat] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7053/api/Pacientis').then(res =>{
            setPacientat(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const [buttonPopup, setButtonPopup] = useState(false);

    const [buttonDeletePopup, setbuttonDeletePopup] = useState(false);

    const [buttonAddPopup, setbuttonAddPopup] = useState(false);

    const [editvalue, setEditvalue] = useState({
        id: 'id',
        emri: 'name',
        mbiemri: 'surname',
        data_lindjes: 'datalindjes'
    });
    return(
        <>
        <div className="container  w-100 h-100 d-flex">
            <div className="container border w-75 p-5 pe-2 pt-4">
                <div className="container  h-100 p-2">
                    <div className="container d-flex justify-content-between pe-3">
                        <p className="fs-5">My Patients</p>
                        <button onClick={() => setbuttonAddPopup(true)} className="btn btn-sm btn-success px-2 mb-2">+ ADD PATIENT</button>
                    </div>
                    <table className="table table-stripied table-light">
                        <thead>
                            <tr className="">
                                <th>ID</th>
                                <th>Emri</th>
                                <th>Data Lindjes</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientat.map(pac => 
                            <Pacienti key={pac.pacientiId} 
                            id={pac.pacientiId} emri={pac.emri} mbiemri={pac.mbiemri} data_lindjes='01/02/2002' 
                            edit={() => {
                                setButtonPopup(true);
                                setEditvalue({
                                    id: pac.pacientiId,
                                    emri: pac.emri,
                                    mbiemri: pac.mbiemri,
                                    data_lindjes: '01/02/2002'
                                })
                            }}
                            delete={() => {
                                setbuttonDeletePopup(true);
                                setEditvalue({
                                    emri: pac.emri,
                                    mbiemri: pac.mbiemri
                                })
                            }}
                            />)}
                        </tbody>
                    </table>                
                </div>
            </div>
            <EditPopup trigger={buttonPopup} close={() => setButtonPopup(false)} id={editvalue.id} emri={editvalue.emri} mbiemri={editvalue.mbiemri} data_lindjes={editvalue.data_lindjes}/>
            <DeletePopup trigger={buttonDeletePopup} no={() => setbuttonDeletePopup(false)} emri={editvalue.emri} mbiemri={editvalue.mbiemri}/>
            <AddPopup trigger={buttonAddPopup} close={() => setbuttonAddPopup(false)}/>
            <div className="container border w-25 py-5 px-3 ">
            </div>
            
        </div>
        </>
    )
}

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

function EditPopup(props){
    
    return (props.trigger) ? (
        <>
            <div className="container position-absolute d-flex justify-content-center start-50 top-50 translate-middle">
                <div className="bg-secondary py-4 ps-5 pe-2 d-flex">
                  <form > 
                    <label className='d-block' htmlFor="">ID</label>
                    <input className='d-block' type='ID'  disabled/>
                    <label className='d-block' htmlFor="">Emri</label>
                    <input className='d-block' type='Emri'/>
                    <label className='d-block' htmlFor="">Mbiemri</label>
                    <input className='d-block' type='Mbiemri'/>
                    <label className='d-block' htmlFor="">DataLindjes</label>
                    <input className='d-block' type='DataLindjes'/>
                    <div className=" mt-2 d-flex justify-content-center">
                        <button className="btn btn-sm btn-success mx-1">Submit</button>
                    </div>
                  </form>
                  <div className="d-flex align-items-end">
                    <button onClick={props.close} className="btn btn-sm btn-warning ms-2 p-1">Close</button>
                  </div>
                </div>
            </div>
        </>
    ): "";
}

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


function AddPopup(props){
    
    return (props.trigger) ? (
        <>
            <div className="container position-absolute d-flex justify-content-center start-50 top-50 translate-middle">
                <div className="bg-secondary py-4 ps-5 pe-2 d-flex">
                  <form > 
                    <label className='d-block' htmlFor="">Emri</label>
                    <input className='d-block' type='Emri' value={props.emri}/>
                    <label className='d-block' htmlFor="">Mbiemri</label>
                    <input className='d-block' type='Mbiemri' value={props.mbiemri}/>
                    <label className='d-block' htmlFor="">DataLindjes</label>
                    <input className='d-block' type='DataLindjes' value={props.data_lindjes}/>
                    <div className=" mt-2 d-flex justify-content-center">
                        <button className="btn btn-sm btn-success mx-1">Submit</button>
                    </div>
                  </form>
                  <div className="d-flex align-items-end">
                    <button onClick={props.close} className="btn btn-sm btn-warning ms-2 p-1">Close</button>
                  </div>
                </div>
            </div>
        </>
    ): "";
}



export default Pacientat;
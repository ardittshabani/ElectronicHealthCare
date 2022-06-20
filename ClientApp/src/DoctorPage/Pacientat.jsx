import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { error } from "jquery";
import { map } from "jquery";

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
    return(
        <>
        <div className="container  w-100 h-100 d-flex">
            <div className="container border w-75 p-5 pe-2 pt-4">
                <div className="container  h-100 p-2">
                    <div className="container d-flex justify-content-between pe-3">
                        <p className="fs-5">My Patients</p>
                        <button className="btn btn-sm btn-success px-2 mb-2">+ ADD PATIENT</button>
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
                            {pacientat.map(pac => <Pacienti key={pac.pacientiId} id={pac.pacientiId} emri={pac.emri} mbiemri={pac.mbiemri} data_lindjes={dataLindjes}/>)}
                        </tbody>
                    </table>                
                </div>
            </div>
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
                <button className=" btn btn-sm bg-secondary py-1 mx-1 px-2 ">Edit</button>
                <button className="btn btn-sm bg-danger py-1 mx-1 px-2" >Delete</button>
            </td>
        </tr>
        </>
    )
}

export default Pacientat;
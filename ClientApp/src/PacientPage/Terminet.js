import react from "react";
import Azem from "../Asetet/xemi.jpg"
import { useState , useEffect} from "react";
import axios from "axios";
import { error } from "jquery";
import { convertCompilerOptionsFromJson } from "typescript";


function Terminet(props){

    return(
        <>
        <div className="appoint-div container w-100 h-100 d-flex">
            <div className="container  w-75 h-100 p-1 bg-white">
                <div className="container  bg-white">
                
                </div>
                <div className="container  bg-white p-1 ">
                    <div className="container border-bottom-0 border-start-0 border-end-0 border">
                        <h6>Appointment List</h6>
                    </div>
                    <div className="container px-1 ">
                        <TerminList name='Ardit Shabani' mjeku='Filan FIsteku' date='01/02/2002/' title='Fewer'/>
                    </div>
                </div>
            </div>
            <div className="container  w-25 h-100">
              
            </div>
        </div>
        </>
    );
}

function TerminList(props){
    const [Terminet, setTerminet] = useState([]);

    useEffect (() => {
        axios.get("https://localhost:7053/api/Terminis").then(res => {
            setTerminet(res.data)
            console.log(res)
        })
        .catch(error =>{
            console.log(error);
        });
    }, [])
    return (
        <>
        <table className="table ">
            <thead>
                <tr>
                    <th scope="col">Patient</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Date</th>
                    <th scope="col">Title</th>
                </tr>
            </thead>
            <tbody>
                {Terminet.map(ter => <TerminTable key={ter.terminiId} foto={Azem} />)}
            </tbody>
        </table>
        </>
    );
}
  
function TerminTable(props){
    return(
        <>
        <tr className="border-bottom-0 border-success border-top-0 border-end-0 border-5" style={{backgroundColor: "#E9E6E6"}}>
            <td><img className="rounded-circle me-2" width="30px" src={props.foto}/>{props.name}</td>
            <td><img className="rounded-circle me-2" width="30px" src={props.foto}/>{props.doc}</td>
            <td>{props.date}</td>
            <td>{props.title}</td>
        </tr>
        </>
    );
}



export default Terminet;    
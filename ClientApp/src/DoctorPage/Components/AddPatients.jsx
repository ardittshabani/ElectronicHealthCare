import { useEffect, useState } from "react";

export default function AddPatients(props){

    const [editValue, setEditValue] = useState(props.value)

    const date = BirdhdayInput(editValue.data_lindjes);

    return (props.triger)?(
        <div className="w-100">
            <button onClick={props.onclick} className="px-3 btn text-primary fs-5 text-decoration-underline">{'< Back'}</button>
            <p className="fs-1 mb-4 text-center fw-light ">{(props.h1)?'New Patients Enrollment': 'Edit Patients'}</p>
            
            <div className="w-100 scroll-form d-flex justify-content-center mt-2">
              <form className="w-50 border p-4">
                <Formrows category="Name">
                    <div className="mx-1 w-75 ">
                        <input type="text" className="form-control" defaultValue={editValue.emri} required/>
                        <label className="text-secondary mt-2">First Name</label>
                    </div>
                    <div className="mx-1 w-75">
                        <input type="text" className="form-control" defaultValue={editValue.mbiemri} required/>
                        <label className="text-secondary mt-2">Last Name</label>
                    </div>  
                </Formrows>
                <Formrows category="Date of Birth">
                    <div className="w-75 mx-1">
                        <Selectinputs start={1} end={30}  defaultt={date[0]}/>
                        <label htmlFor="" className="text-secondary mt-3">Day</label>
                    </div>
                    <div className="w-75 mx-1">
                        <Selectinputs start={1} end={12}   defaultt={date[1]}/>
                        <label htmlFor="" className="text-secondary mt-3">Month</label>
                    </div>
                    <div className="w-75 mx-1">
                        <Selectinputs start={1920} end={2022}  defaultt={date[2]}/>
                        <label htmlFor="" className="text-secondary mt-3">Year</label>
                    </div>
                </Formrows>
                <Formrows category="Gender">
                    <select className="form-select" defaultValue={editValue.gjinia}>
                        <option >Chose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </Formrows>
                <Formrows category="Contact Number:">
                    <input type="" className="form-control" placeholder='(+383) 4x xxx xxx' required defaultValue={editValue.numri}/>
                </Formrows>
                <Formrows category="Email">
                    <div className="w-100">
                        <input type="email" className="form-control" required defaultValue={editValue.email}/>
                        <label htmlFor="" className="text-secondary mt-3" >example@example.com</label>
                    </div>
                </Formrows>
                <Formrows category="Address">
                    <div className="d-block">
                        <input type="text" className="form-control" required id="streat" defaultValue={editValue.adress && editValue.adress.rruga ? editValue.adress.rruga : "Not Avilable"}/>
                        <label htmlFor="streat" className="text-secondary mt-3">Street Address</label>
                        <div className="d-flex mt-2">
                            <div className="mx-1">
                                <input type="text" className="form-control" required defaultValue={editValue.adress && editValue.adress.city ? editValue.adress.city : "Not Avilable"}/>
                                <label htmlFor="" className="text-secondary mt-3">City</label>
                            </div>
                            <div className="mx-1">
                                <input type="text" className="form-control" required defaultValue={editValue.adress && editValue.adress.zipCode ? editValue.adress.zipCode : "Not Avilable"}/>
                                <label htmlFor="" className="text-secondary mt-3">Zip Code</label>
                            </div>
                        </div>
                    </div>
                </Formrows>
                <Formrows category="Weight(kg)">
                    <input type="number" step='0.01' className="form-control" required defaultValue={editValue.weight}/>
                </Formrows>
                <Formrows category="Height(cm)">
                    <input type="number" step='0.01' className="form-control" required defaultValue={editValue.height}/>
                </Formrows>
                <div className="d-flex justify-content-center"><button className="btn-lg btn-success px-5">{(props.h1)?"Enroll":"Submit"}</button></div>
            </form>
            </div>
        </div>
    ):"";
}

function Formrows(props){
    return(
        <div className="d-flex justify-content-around w-100 my-5 py-2 input-group">
            <p className="w-25 fs-5">{props.category}</p>
            <div className="d-flex w-75 justify-content-center">
                {props.children}
            </div>
        </div>
    )
}

function Selectinputs(props){
    function x (start, end){
        const y = [];
        for (let i=start, j=0; i<=end; i++, j++){
            y[j]=i;
        }
        return y;
    }

    const range = x(props.start, props.end);
    return(
        <select className="form-select" defaultValue={props.defaultt}>
            {range.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
    );
}

function BirdhdayInput(index){
    if (index == undefined || index == null){
        return ["", "", ""]
    }
    const x = index?.split('/');
    return x;
}



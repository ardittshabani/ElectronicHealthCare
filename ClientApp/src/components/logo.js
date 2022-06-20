import react from "react";
import LogoImg from "../Asetet/logo.jpg"

function Logo(){
    return(
        <div className="container logo-div bg-red mb-3 border-t-0 ">
            <img width='200px' height='200px' src={LogoImg}/>
        </div>
    );
}

export default Logo;
import Time from "../Asetet/clock.png"
import Calendar from "../Asetet/calendar.png"
function Today (props){
    return(
        <>
        <div className="container bg-primary  px-3 pt-2 ap-remind mt-1">
            <div className="container d-flex">
                <img src={props.foto} className="rounded-circle m-1" width="45px" height="45px"/>
                <h4 className="text-white ms-2">{props.name}</h4>
            </div>
            <div className="container d-flex justify-content-around w-75 ms-2 mt-1">
                <div className="container d-flex">
                    <img src={Calendar} width="20px" height="20px"/>
                    <p className="text-light mx-1 fs-6">{props.date}</p>
                </div>
                <div className="container d-flex ms-3">
                    <img className="" src={Time}  width="20px" height="20px"/>
                    <p className="text-light ms-2 " alt="">{props.time}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Today;
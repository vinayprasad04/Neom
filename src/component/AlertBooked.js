import React from "react";
import {Link} from "react-router-dom";
import walkingforlong from "../assets/img/walking-for-long.png";

const AlertBooked = ({onCancelAlert, heading, dec, }) =>{
    const onSubmit =() =>{
        onCancelAlert();
    }
    return(
        <div className={"AlertWrapper"}>
            <div className="alertInner">
                <h1>{heading}</h1>
                <p>{dec}</p>
                <select>
                    <option value="1">1 Seat</option>
                    <option value="1">2 Seat</option>
                    <option value="1">3 Seat</option>
                    <option value="1">4 Seat</option>
                </select>
                <div className="btnGroup">
                 <Link to={{pathname: "/recommendation", hash: "bookedSeat"}} onClick={onSubmit} className={"btn"} style={{width:"188px"}}>Reserved My Seat</Link>
                   {/* <button className="btn">Yes, I'm sure</button>*/}
                    <button className="btn default" onClick={onCancelAlert}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AlertBooked;

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import walkingforlong from "../assets/img/walking-for-long.png";

const AlertBooked = ({onCancelAlert, heading, dec, eventName, rCancelAlert, setRCancelAlert}) =>{
    const [reSedule, setReSedule] = useState({selectedDate: 'Jan 1, 2023', selectedTime: '10:00 AM - 3:30 PM', selectedSeat: '1'});
    const onChangeResedule = (e, item) =>{
        setReSedule({...reSedule, [item]:e.target.value});
    }

    const onSubmit =() =>{
        if(eventName ==="Round of Golf"){
            console.log("vinay inside of golf", eventName);
            setRCancelAlert({...rCancelAlert, crBookedAlert:false, srBookedAlert:true, srBookedAlertData:reSedule})
        }else if(eventName ==="Jazz Music"){
            console.log("vinay inside of Jazz", eventName);
            setRCancelAlert({...rCancelAlert, crBookedAlert:true, srBookedAlert:false})
        }else {
            console.log("inside of other", eventName);
        }
        onCancelAlert();
    }
    return(
        <div className={"AlertWrapper"}>
            <div className="alertInner">
                <h1>{heading}</h1>
                <p>{dec}</p>
                {
                    (eventName ==="Round of Golf") ?
                        <div className="form">
                            <div className="form__group">
                                <label className="form__label">Select a day</label>
                                <select value={reSedule.selectedDate} onChange={(e)=>{onChangeResedule(e, "selectedDate")}}>
                                    <option value="Jan 1, 2023">Jan 1, 2023</option>
                                    <option value="Jan 2, 2023">Jan 2, 2023</option>
                                    <option value="Jan 3, 2023">Jan 3, 2023</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__label">Select a time slot</label>
                                <select value={reSedule.selectedTime} onChange={(e)=>{onChangeResedule(e, "selectedTime")}}>
                                    <option value="10:00 AM - 3:30 PM">10:00 AM - 3:30 PM</option>
                                    <option value="3:30 PM - 5:30 PM">3:30 PM - 5:30 PM</option>
                                    <option value="5:30 PM - 7:30 PM">5:30 PM - 7:30 PM</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__label">Select your seats</label>
                                <select value={reSedule.selectedSeat} onChange={(e)=>{onChangeResedule(e, "selectedSeat")}}>
                                    <option value="1">1 Seat</option>
                                    <option value="2">2 Seat</option>
                                    <option value="3">3 Seat</option>
                                    <option value="4">4 Seat</option>
                                </select>
                            </div>

                        </div>:
                        <select>
                            <option value="1">1 Seat</option>
                            <option value="1">2 Seat</option>
                            <option value="1">3 Seat</option>
                            <option value="1">4 Seat</option>
                        </select>
                }

              {/*  <select>
                    <option value="1">1 Seat</option>
                    <option value="1">2 Seat</option>
                    <option value="1">3 Seat</option>
                    <option value="1">4 Seat</option>
                </select>*/}
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

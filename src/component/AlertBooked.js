import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import walkingforlong from "../assets/img/walking-for-long.png";

const AlertBooked = ({onCancelAlert, heading, dec, eventName, rCancelAlert, setRCancelAlert, reseduleWithJazz}) =>{
    const [reSedule, setReSedule] = useState({selectedDate: 'Dec 12, 2022', selectedTime: '7:00 AM - 9:00 AM', selectedSeat: '1'});
    const onChangeResedule = (e, item) =>{
        setReSedule({...reSedule, [item]:e.target.value});
    }

    const onSubmit =() =>{
        if(eventName ==="Round of Golf"){
            setRCancelAlert({...rCancelAlert, crBookedAlert:false, srBookedAlert:true, srBookedAlertData:reSedule})
        }else if(eventName ==="Jazz Music"){
            setRCancelAlert({...rCancelAlert, crBookedAlert:true, srBookedAlert:false})
        }else {
            console.log("inside of other", eventName);
        }
        onCancelAlert();
    }
    const onSubmitReseduleWithJazz = () =>{
        setRCancelAlert({...rCancelAlert, ReseduleWithJazzOut: true})
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
                                    <option value="Dec 12, 2022">Dec 12, 2022</option>
                                    <option value="Dec 13, 2022">Dec 13, 2022</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__label">Select a time slot</label>
                                <select value={reSedule.selectedTime} onChange={(e)=>{onChangeResedule(e, "selectedTime")}}>
                                    <option value="7:00 AM - 9:00 AM">7:00 AM - 9:00 AM</option>
                                    <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                                    <option value="12:00 PM - 4:00 PM">12:00 PM - 4:00 PM</option>
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
                    {
                        reseduleWithJazz ?
                            <Link to={{pathname: "/recommendation", hash: "bookedSeat"}} onClick={onSubmitReseduleWithJazz} className={"btn"} style={{width:"188px"}}>Reserved My Seat</Link>
                            :
                            <Link to={{pathname: "/recommendation", hash: "bookedSeat"}} onClick={onSubmit} className={"btn"} style={{width:"188px"}}>Reserved My Seat</Link>
                    }

                   {/* <button className="btn">Yes, I'm sure</button>*/}
                    <button className="btn default" onClick={onCancelAlert}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AlertBooked;

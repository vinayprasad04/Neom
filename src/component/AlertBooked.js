import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import walkingforlong from "../assets/img/walking-for-long.png";

const AlertBooked = ({onCancelAlert, heading, dec, eventName, rCancelAlert, setRCancelAlert, reseduleWithJazz}) =>{
    const [reSedule, setReSedule] = useState({selectedDate: 'Dec 12, 2022', selectedTime: '7:00 AM - 9:00 AM', selectedSeat: '1'});
    const onChangeResedule = (e, item) =>{
        setReSedule({...reSedule, [item]:e.target.value});
    }
    let navigate = useNavigate();


    console.log("reseduleWithJazz",reseduleWithJazz);
    const onSubmit =(e) =>{
        console.log("eventName new",eventName);
        if(eventName ==="Round of Golf"){
            setRCancelAlert({...rCancelAlert, crBookedAlert:false, srBookedAlert:true, srBookedAlertData:reSedule})
        }else if(eventName ==="Tech Expo"){
            setRCancelAlert({...rCancelAlert, crBookedAlert:true, srBookedAlert:false})
            e.preventDefault();
            navigate("/");
        }else {
            console.log("inside of other", eventName);
        }
        
        onCancelAlert();
    }
    const onSubmitReseduleWithJazz = (e) =>{
        setRCancelAlert({...rCancelAlert, ReseduleWithJazzOut: true})
        onCancelAlert();
        e.preventDefault();
        navigate("/");
        console.log("eventName new asdasd",eventName);
        
    }
    return(
        <div className={"AlertWrapper"}>
            <div className="alertInner">
                <h1>{heading}</h1>
                <p>{dec}</p>
                {
                     (eventName ==="Round of Golf") && !reseduleWithJazz ?
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
                                <label className="form__label">Select Number of People</label>
                                <select value={reSedule.selectedSeat} onChange={(e)=>{onChangeResedule(e, "selectedSeat")}}>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                </select>
                            </div>

                        </div>:
                        <select>
                            <option value="1">1 Person</option>
                            <option value="1">2 people</option>
                            <option value="1">3 people</option>
                            <option value="1">4 people</option>
                        </select>
                }
                <div className="btnGroup">
                    {
                        reseduleWithJazz ?
                            <Link to={{pathname: "/recommendation", hash: "bookedSeat"}} onClick={onSubmitReseduleWithJazz} className={"btn"} style={{width:"188px"}}>Reserve</Link>
                            :
                            <Link to={{pathname: "/recommendation", hash: "bookedSeat"}} onClick={onSubmit} className={"btn"} style={{width:"188px"}}>Reserve</Link>
                    }

                   {/* <button className="btn">Yes, I'm sure</button>*/}
                    <button className="btn default" onClick={onCancelAlert}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AlertBooked;

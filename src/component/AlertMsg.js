import React from "react";

const AlertMsg = () =>{
    return(
        <div className={"AlertWrapper"}>
            <div className="alertInner">
                <h1>Hi, Charlie</h1>
                <p>Are you sure, you want to reschedule this event?</p>
                <div className="btnGroup">
                    <button className="btn">Yes, I'm sure</button>
                    <button className="btn">No, thanks</button>
                </div>
            </div>
        </div>
    )
}

export default AlertMsg;

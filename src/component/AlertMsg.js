import React from "react";
import {Link} from "react-router-dom";

const AlertMsg = ({setConfirmAlert, heading, dec, setCancelAlert}) =>{
    const onCancel = () =>{
        if(setCancelAlert){
            setCancelAlert(false);
        }else {
            setConfirmAlert(false);
        }
    }
    return(
        <div className={"AlertWrapper"}>
            <div className="alertInner">
                <h1>{heading}</h1>
                <p>{dec}</p>
                <div className="btnGroup">
                    <Link to={'/recommendation'} className={"btn"}>Yes, I'm sure</Link>
                   {/* <button className="btn">Yes, I'm sure</button>*/}
                    <button className="btn default" onClick={onCancel}>No, thanks</button>
                </div>
            </div>
        </div>
    )
}

export default AlertMsg;

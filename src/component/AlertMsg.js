import React from "react";
import {Link} from "react-router-dom";

const AlertMsg = ({setConfirmAlert, heading, dec, setCancelAlert, }) =>{
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
                    {setCancelAlert &&<Link to={{pathname: "/recommendation", hash: "cancelAlert"}} onClick={()=>setCancelAlert(false)} className={"btn"}>Yes, I'm sure</Link>}
                    {setConfirmAlert &&<Link to={{pathname: "/recommendation", hash: "confirmAlert"}} onClick={()=>setConfirmAlert(false)} className={"btn"}>Yes, I'm sure</Link>}
                    <button className="btn default" onClick={onCancel}>No, thanks</button>
                </div>
            </div>
        </div>
    )
}

export default AlertMsg;

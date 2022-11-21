import React from "react";
import {Link} from "react-router-dom";

const ThanksAlert = ({onCancel, alert}) =>{
    return(
        <div className="AlertWrapper"  style={{display:!alert ? "none":"flex"}}>
            <div className="alertInner">
                <h1>Success!</h1>
                <p>your data successfully submit</p>
                <div className="btnGroup">
                    <button className="btn" onClick={onCancel}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default ThanksAlert;

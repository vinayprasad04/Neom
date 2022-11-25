import React, {useEffect, useState} from 'react';
import RatingValue from "./Rating";
import AddVivoMeaterReview from "./AddVivoMeaterReview";
import ReactDOM from "react-dom";
import ThanksAlert from "./ThanksAlert";


const AddAReview = ({closeModal, vivoMeaterModal, setVivoMeaterModal}) => {
    const [rating, setRating] = useState({});
    const [alert, setAlert] = useState(false);
    const onClickRating = (e, item)=> {
        if(item ==="feedback"){
            setRating({...rating, [item]:e.target.value});
        }else {
            setRating({...rating, [item]:e});
        }
    }
    const closeReviewModel = ()=>{
        setRating({});
        closeModal()
    }
    const onSubmitHandler = () =>{
        //setAlert(true);
        setTimeout(()=>{
            setRating({});
            closeModal();
            setAlert(true);
        },500);
    }
    const onCancelAlert = ()=>{
        setAlert(false);
    }
    const container = document.getElementById("root");
    return(
        <>
            {ReactDOM.createPortal(<ThanksAlert alert={alert} onCancel={onCancelAlert}/>, container)}
            <div id="modal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">
                       {/* <img src={process.env.PUBLIC_URL + "./../img/close.svg"} alt="Close"
                             onClick={closeModal}/>*/}
                        <svg onClick={closeReviewModel} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88" enableBackground="new 0 0 122.881 122.88">
                            <g>
                                <path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z" />
                            </g>
                        </svg>
                    </span>
                    <h2>Add a review</h2>
                </div>
                <div className="modal-body">
                    <p>If you're here on this page, we bet you enjoy this event fully. Would you
                        mind to share your valuable feedback review with us?</p>
                    {/* <div class="modal-image">
                                <img src="./assets/img/vibe-o-meter.svg" alt="">
                            </div>  */}
                    {/*                    <div className="card">
                      <div className="card__info">
                        <div className="card__info--image">
                          <img src={process.env.PUBLIC_URL + "./../img/trending1.jpg"} alt=""/>
                        </div>
                        <div className="card__info--details">
                          <h4>Men's Golf League</h4>
                          <p>Nov 10-29</p>
                        </div>
                      </div>
                      <div className="card__review">
                        <div className="rating"></div>
                        <div className="review"><span>5.0</span>(23 reviews)</div>
                      </div>
                    </div>*/}
                    <div className="ratings__row">
                        <div className="ratings__row--item">
                            <div className="ratings--title">Quality of Event</div>
                            <div className="rating"> <RatingValue size={28} onClick={(e)=>onClickRating(e, "quality")} fillColor={"#FF385C"} initialValue={rating?.quality}/></div>
                        </div>
                        <div className="ratings__row--item">
                            <div className="ratings--title">Services at Event</div>
                            <div className="rating"> <RatingValue size={28} onClick={(e)=>onClickRating(e, "services")} fillColor={"#FF385C"} initialValue={rating?.services}/></div>
                        </div>
                    </div>
                    <div className="ratings__row">
                        <div className="ratings__row--item">
                            <div className="ratings--title">Facilities of Event</div>
                            <div className="rating"> <RatingValue size={28} onClick={(e)=>onClickRating(e, "facilities")} fillColor={"#FF385C"} initialValue={rating?.facilities}/></div>
                        </div>
                        <div className="ratings__row--item">
                            <div className="ratings--title">Operator of Event</div>
                            <div className="rating"> <RatingValue size={28} onClick={(e)=>onClickRating(e, "operator")} fillColor={"#FF385C"} initialValue={rating?.operator}/></div>
                        </div>
                    </div>
                    <div className="ratings__row">
                        <div className="ratings__row--item">
                            <div className="ratings--title">Staff Politeness</div>
                            <div className="rating"> <RatingValue size={28} onClick={(e)=>onClickRating(e, "staff")} fillColor={"#FF385C"} initialValue={rating?.staff}/></div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="form__group">
                        <textarea onChange={(e)=>onClickRating(e, "feedback")} value={(rating?.feedback) || ""} rows="5"placeholder="Share your feedback and suggestions about this event..."></textarea>
                    </div>
                    <button className="btn btn__black" onClick={onSubmitHandler} style={{width:"140px"}}>Submit</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default AddAReview;

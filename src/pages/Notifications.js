import React, {useState} from 'react';
import {Header, Footer,} from "../component/index.js";
import {Profile} from "../MockData";
import {Link} from "react-router-dom";
import AddAReview from "../component/AddAReview";
import AddVivoMeaterReview from "../component/AddVivoMeaterReview";

const Notifications = () =>{
    const [vivoMeaterModal, setVivoMeaterModal] = useState(false);
    function openModal() {
        let el = document.getElementById('modal')
        el.style = 'display:block'
    }
    function closeModal() {
        let el = document.getElementById('modal')
        el.style = 'display:none';
    }
    return(
        <>
            <AddAReview closeModal={closeModal} vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>
            {vivoMeaterModal && <AddVivoMeaterReview vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>}
            <Header/>
            <main className="content">
                <div className="notification">
                    <div className="container">
                        <h2 className="notification__title">Good morning {Profile[0].Customer_Name}!</h2>
                        <div className="notification__subtitle">Here are the notifications that you have received so
                            far.
                        </div>
                        <div className="row">
                            <div className="col_md_2">
                                <div className="notification__date">
                                    <ul className="date__list">
                                        <li className="date__list--item">
                                            <div className="date">Nov 5</div>
                                            <span className="circle-mark"></span>
                                        </li>
                                        <li className="date__list--item">
                                            <div className="date">Nov 5</div>
                                            <span className="circle-mark"></span>
                                        </li>
                                        <li className="date__list--item">
                                            <div className="date">Nov 5</div>
                                            <span className="circle-mark"></span>
                                        </li>
                                        <li className="date__list--item">
                                            <div className="date">Nov 5</div>
                                            <span className="circle-mark"></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col_sm_12 col_md_10">
                                <div className="notification__content">
                                    <ul className="notification__list">
                                        <li className="notification__list--item">
                                            <div className="notification__info">
                                                <div className="image--wrapper">
                                                    <img src={process.env.PUBLIC_URL + './img/Image118.jpg'} alt="" width="100px"
                                                         height="100px"/>
                                                </div>
                                                <div className="content--wrapper">
                                                    <div className="title">We have added a new activity for you.</div>
                                                    <div className="subtitle">Men's Golf League</div>
                                                    <div className="details">{/*AED 1800 per person*/}10:30AM - 7:30PM</div>
                                                    <div className="details">Nov 10-29</div>
                                                </div>
                                            </div>
                                            <Link to={`/eventdetails/10005`} className="btn__transparent">View event</Link>
                                        </li>
                                        <li className="notification__list--item">
                                            <div className="notification__info">
                                                <div className="image--wrapper">
                                                    <img src={process.env.PUBLIC_URL + './img/Image118.jpg'} alt="" width="100px"
                                                         height="100px"/>
                                                </div>
                                                <div className="content--wrapper">
                                                    <div className="title">CongratulationsCharlie!</div>
                                                    <div className="details">You have completed event "Men's Golf
                                                        League". Hope you have enjoyed the activity. Please do share
                                                        your valuable feedback with us to improve and serve you the
                                                        best.
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn__transparent" onClick={openModal}>Add a review</button>
                                        </li>
                                        <li className="notification__list--item">
                                            <div className="notification__info">
                                                <div className="image--wrapper">
                                                    <img src='' alt="" width="100px" height="100px"/>
                                                    <span>UG</span>
                                                </div>
                                                <div className="content--wrapper">
                                                    <div className="title">We have added a new activity for you.</div>
                                                    <div className="subtitle">Men's Golf League</div>
                                                    <div className="details">{/*AED 1800 per person*/}10:30AM - 7:30PM</div>
                                                    <div className="details">Nov 10-29</div>
                                                </div>
                                            </div>
                                            <Link to={`/`} className="btn__transparent">Go to Dashboard</Link>
                                        </li>
                                        <li className="notification__list--item">
                                            <div className="notification__info">
                                                <div className="image--wrapper">
                                                    <img src={process.env.PUBLIC_URL + './img/Image118.jpg'} alt="" width="100px" height="100px"/>
                                                </div>
                                                <div className="content--wrapper">
                                                    <div className="title">CongratulationsCharlie!</div>
                                                    <div className="details">You have completed event "Men's Golf
                                                        League". Hope you have enjoyed the activity. Please do share
                                                        your valuable feedback with us to improve and serve you the
                                                        best.
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn__transparent" onClick={openModal}>Add a review</button>
                                        </li>
                                    </ul>
                                    <button className="btn btn__black">Load more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Notifications;

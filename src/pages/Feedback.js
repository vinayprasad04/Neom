import React, {useEffect, useState} from 'react';
import {
    Header,
    Footer,
} from "../component/index.js";
import {FeedData} from './../utils/FeedbackData';
import {Profile} from "../MockData";
import ChartSmile from "../component/Chart";
import AddAReview from "../component/AddAReview";
import AddVivoMeaterReview from "../component/AddVivoMeaterReview";
import GaugeChart from 'react-gauge-chart';
const EmotionList = ({rating}) =>{
let ratingNew = Number(rating).toFixed(0);
    return(
        <ul className="emotion__list">
            <li className={`emotion__list--item  ${(ratingNew==5) && 'active'}`}>
                <img src={process.env.PUBLIC_URL + "./img/overwhelmed.svg"} alt=""/>
            </li>
            <li className={`emotion__list--item  ${ratingNew==4 && 'active'}`}>
                <img src={process.env.PUBLIC_URL + "./img/joy.svg"} alt=""/>
            </li>
            <li className={`emotion__list--item  ${ratingNew==3 && 'active'}`}>
                <img src={process.env.PUBLIC_URL + "./img/appreciation.svg"} alt=""/>
            </li>
            <li className={`emotion__list--item  ${ratingNew==2 && 'active'}`}>
                <img src={process.env.PUBLIC_URL + "./img/boredom.svg"} alt=""/>
            </li>
            <li className={`emotion__list--item  ${ratingNew==1 && 'active'}`}>
                <img src={process.env.PUBLIC_URL + "./img/disappointed.svg"} alt=""/>
            </li>
            <li className={`emotion__list--item  ${ratingNew==0 && 'active'}`}>
                <img src={process.env.PUBLIC_URL + "./img/anger.svg"} alt=""/>
            </li>
        </ul>
    )
}

const Feedback = () =>{
    const [vivoMeaterModal, setVivoMeaterModal] = useState(false);
    function openModal() {
        let el = document.getElementById('modal')
        el.style = 'display:block'
    }
    function closeModal() {
        let el = document.getElementById('modal')
        el.style = 'display:none';
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
            <div>
                <AddAReview closeModal={closeModal} vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>
                {vivoMeaterModal && <AddVivoMeaterReview vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>}
                <Header/>
                <main className="content feedback">
                    <div className="feedback__banner">
                        <div className="container--fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col_sm_12 col_md_12 col_lg_6">
                                        <div className="feedback__banner--info">
                                            <div className="feedback__banner--icon">
                                                <img src={process.env.PUBLIC_URL + "./img/overwhelmed.svg"} alt="Overwhelmed"/>
                                            </div>
                                            <h2 className="feedback__banner--title">Overwhelmed experience</h2>
                                            <h3 className="feedback__banner--subtitle">Your Vibe-O-Meter reading exits us too
                                            </h3>
                                            <div className="feedback__banner--description">We are happy too because we
                                                successfully keep you happy during this visit to Sindalah City.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col_sm_12 col_md_12 col_lg_6">
                                        <div className="feedback__banner--graphic">
                                            {/*<GaugeChart id="gauge-chart5"
                                                        nrOfLevels={30}
                                                        arcsLength={[
                                                            0.04,0.04,0.04,0.04,0.04,
                                                            0.04,0.04,0.04,0.04,0.04,
                                                            0.04,0.04,0.04,0.04,0.04,
                                                            0.04,0.04,0.04,0.04,0.04,
                                                            0.04,0.04,0.04,0.04,0.04,]}
                                                        colors={[
                                                            '#55bf3b', '#55bf3b','#55bf3b','#55bf3b','#55bf3b',
                                                            '#9acc0d', '#9acc0d','#9acc0d','#9acc0d','#9acc0d',
                                                            '#ace50d', '#ace50d','#ace50d','#ace50d','#ace50d',
                                                            '#ffb03a','#ffb03a','#ffb03a','#ffb03a','#ffb03a',
                                                            '#ff385c','#ff385c','#ff385c','#ff385c','#ff385c',]}
                                                        percent={0.06}
                                                        arcPadding={0.01}
                                                        cornerRadius={0}
                                                        needleColor="#222222"
                                                        needleBaseColor="#222222"
                                                        hideText={true}
                                                        marginInPercent={0.03}
                                            />*/}
                                            <img src={process.env.PUBLIC_URL + "./img/vibe-o-meter.svg"} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="backdrop--filter"></div>
                    </div>

                    <div className="feedback__cards">
                        <div className="container">
                            <h2 className="feedback__title">Hi {Profile[0].Customer_Name},<br/>here are the glimpse of your feedback shared
                                with us.
                            </h2>
                            <ul className="feedback__list">
                                {
                                    FeedData.map((item,index)=>{
                                        return(
                                            <li key={index} className="feedback__list--item">
                                                <div className="feedback__list--image">
                                                    <div className="card--image">
                                                        <img src={process.env.PUBLIC_URL + "./img/"+item.Event.Img_Url} alt=""/>
                                                    </div>
                                                    <div className="card--text">
                                                        <h4>{item.Event.Event_Name}</h4>
                                                        <p>{item.Event.Event_End_Date}</p>
                                                        <div className="card--review">
                                                            <p>{item.Event.Total_reviews} reviews</p>
                                                            <div className="icon"><span className="icon-star"></span>{item.Event.Overall_Event_Rating}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="feedback__list--content">
                                                    <div className="card--date">{item.Review.Date}</div>
                                                {item.Review.Feedback && item.Review.Overall_Rating ?
                                                    <>
                                                        <h3 className="card--title">{item.Review.Feedback}</h3>
                                                        <div className="card--description">{item.Review.Suggestion}</div>
                                                        <EmotionList rating={item.Review.Overall_Rating}/>
                                                    </>:
                                                    <>
                                                        <div className="card--subtitle">
                                                            Hey Charlie, you haven't added you feedback yet.
                                                            Please share your experience with us to serve you better next time.
                                                        </div>
                                                        <button className="btn btn__black" onClick={openModal}>Add a review</button>
                                                     </>
                                                    }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
{/*                                <li className="feedback__list--item">
                                    <div className="feedback__list--image">
                                        <div className="card--image">
                                            <img src={process.env.PUBLIC_URL + "./img/trending1.jpg"} alt=""/>
                                        </div>
                                        <div className="card--text">
                                            <h4>Men's Golf League</h4>
                                            <p>Nov 10-29, 2022</p>
                                            <div className="card--review">
                                                <p>123 reviews</p>
                                                <div className="icon"><span className="icon-star"></span>5.0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedback__list--content">
                                        <div className="card--date">Nov 17, 2022</div>
                                        <div className="card--title">Great experience!</div>
                                        <div className="card--description">Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elit.
                                        </div>
                                        <EmotionList/>
                                    </div>
                                </li>
                                <li className="feedback__list--item">
                                    <div className="feedback__list--image">
                                        <div className="card--image">
                                            <img src={process.env.PUBLIC_URL + "./img/recommend2.jpg"} alt=""/>
                                        </div>
                                        <div className="card--text">
                                            <h4>Swimming game for below 18 year kids</h4>
                                            <p>Nov 10-29, 2022</p>
                                            <div className="card--review">
                                                <p>123 reviews</p>
                                                <div className="icon"><span className="icon-star"></span>5.0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedback__list--content">
                                        <div className="card--date">Nov 12, 2022</div>
                                        <div className="card--subtitle">Hey Charlie, you haven't added you feedback yet.
                                            Please share your experience with us to serve you better next time.
                                        </div>
                                        <button className="btn btn__black">Add a review</button>
                                    </div>
                                </li>
                                <li className="feedback__list--item">
                                    <div className="feedback__list--image">
                                        <div className="card--image">
                                            <img src={process.env.PUBLIC_URL + "./img/trending2.jpg"} alt=""/>
                                        </div>
                                        <div className="card--text">
                                            <h4>Live comedy Performance in front of live audience</h4>
                                            <p>Nov 10-29, 2022</p>
                                            <div className="card--review">
                                                <p>123 reviews</p>
                                                <div className="icon"><span className="icon-star"></span>5.0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedback__list--content">
                                        <div className="card--date">Nov 17, 2022</div>
                                        <div className="card--title">Thank you Unified Guests for this great
                                            experience!
                                        </div>
                                        <div className="card--description">Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elit.
                                        </div>
                                        <EmotionList/>
                                    </div>
                                </li>
                                <li className="feedback__list--item">
                                    <div className="feedback__list--image">
                                        <div className="card--image">
                                            <img src={process.env.PUBLIC_URL + "./img/recommend1.jpg"} alt=""/>
                                        </div>
                                        <div className="card--text">
                                            <h4>Men's Golf League</h4>
                                            <p>Nov 10-29, 2022</p>
                                            <div className="card--review">
                                                <p>123 reviews</p>
                                                <div className="icon"><span className="icon-star"></span>5.0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedback__list--content">
                                        <div className="card--date">Nov 11, 2022</div>
                                        <div className="card--title">Love all the activities!</div>
                                        <div className="card--description">Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                            sadipscing elit.
                                        </div>
                                        <EmotionList/>
                                    </div>
                                </li>*/}
                            </ul>
                        </div>

                    </div>


                </main>
            </div>
    )
}

export default Feedback;

import React, {useEffect} from 'react';
import {
    Header,
    Footer,
    Banner
} from "../component/index.js";
import {Profile} from './../MockData';
import Recommendations from "../component/Recommendations";
import getJson from "../utils/eventDetailData";

const recommendationsPage = getJson();

const Recommendation = () =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
        <Header/>
            <main className="content home recommendation--page">

                <div className="recommendations">
                    <div className="container">
                        <h2 className="recommendations__title">Hey {Profile[0].Customer_Name},</h2>
                        <div className="recommendations__subtitle">
                            <h3>Due to some bad weather your "Golf Tournament" event has been cancelled.</h3>
                            <h3> We have a similar event for you, starting just in an hour and 5 minutes drive
                                away.</h3>
                        </div>
                    </div>
                </div>
                <Banner/>


                <div className="recommendations">
                    <div className="container">
                        <h2 className="recommendations__title">Some similar recommendation for you, {Profile[0].Customer_Name}.</h2>

                        <div className="schedule">
                            <div className="time">
                                <ul className="time__list">
                                    <li className="time__list--item">10 mins walking</li>
                                    <li className="time__list--item active">20 mins walking</li>
                                    <li className="time__list--item">30 mins walking</li>
                                </ul>

                                <ul className="time__list">
                                    <li className="time__list--item">10 mins drive</li>
                                    <li className="time__list--item active">20 mins drive</li>
                                    <li className="time__list--item">30 mins drive</li>
                                </ul>

                                <ul className="time__list">
                                    <li className="time__list--item border-rounded">No limits</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card__grid">
                            <Recommendations {...recommendationsPage.RecommendationData} showHeartIcon={true} />
                        </div>
                    </div>
                </div>

            </main>
        <Footer/>
        </>
    )
}

export default Recommendation;

import React, {useEffect, useState} from 'react';
import {Header,} from "../component/index.js";
import {Profile} from "../MockData";
import {Link} from "react-router-dom";
import AddAReview from "../component/AddAReview";
import AddVivoMeaterReview from "../component/AddVivoMeaterReview";
import {NotificationData} from '../MockData.js'


const Notifications = (props) =>{
    const itemPerRow = 4,
        Next = 4;
    const [rowData, setRowData] = useState(NotificationData);
    const [limitData, setLimitData] = useState(itemPerRow);
    const [loadMoreBtn, setLoadMoreBtn] = useState(true);
    const onLoadMoreData = () =>{
        if(rowData.length>limitData){
            setLimitData(limitData+Next);
        }else {

        }
    }
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
    },[]);

    useEffect(()=>{
        const buttonDisable = ()=>{
            if(rowData.length<=limitData){
                setLoadMoreBtn(false)
            }
        }
        buttonDisable();
    },[limitData]);
    return(
        <>
            <AddAReview closeModal={closeModal} vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>
            {vivoMeaterModal && <AddVivoMeaterReview vivoMeaterModal={vivoMeaterModal} setVivoMeaterModal={setVivoMeaterModal}/>}
            <Header {...props}/>
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
                                        {rowData.slice(0, limitData).map((item, index)=>{
                                            return(
                                                    <li className="date__list--item"  key={index+"11"}>
                                                        <div className="date">{item.Notification_Date}</div>
                                                        <span className="circle-mark"></span>
                                                    </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>

                            <div className="col_sm_12 col_md_10">
                                <div className="notification__content">
                                    <ul className="notification__list">
                                        {
                                            rowData.slice(0, limitData).map((item, index)=>{
                                                return(
                                                    <li key={index} className="notification__list--item">
                                                        <div className="notification__info">
                                                            <div className="image--wrapper">
                                                                {item.Event_Img ?
                                                                    <img src={process.env.PUBLIC_URL + './img/' + item.Event_Img}
                                                                      alt="" width="100px" height="100px"/>
                                                                      :<span>UG</span>
                                                                }
                                                            </div>
                                                            <div className="content--wrapper">
                                                                {item.Note && <div className="title">{item.Note}</div>}
                                                                {item.Event_Name && <div className="subtitle">{item.Event_Name}</div>}
                                                                {item.Event_Time && <div className="details">{item.Event_Time}</div>}
                                                                {item.Event_Start_Date && <div className="details">{item.Event_Start_Date}</div>}
                                                                {item.Event_Description && <div className="details">{item.Event_Description}</div>}
                                                            </div>
                                                        </div>
                                                        {item.Notification_Type ==="event" && <Link to={`/eventdetails/10005`} className="btn__transparent">View event</Link>}
                                                        {item.Notification_Type ==="review" && <button className="btn__transparent" onClick={openModal}>Add a review</button>}
                                                        {item.Notification_Type ==="dashboard" && <Link to={`/`} className="btn__transparent">Go to Dashboard</Link>}


                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {loadMoreBtn &&<button className="btn btn__black" onClick={onLoadMoreData}>Load more</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Notifications;

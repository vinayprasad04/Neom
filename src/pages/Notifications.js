import React, {useEffect, useState} from 'react';
import {Header, Footer,} from "../component/index.js";
import {Profile} from "../MockData";
import {Link} from "react-router-dom";
import AddAReview from "../component/AddAReview";
import AddVivoMeaterReview from "../component/AddVivoMeaterReview";

const NotificationData = [
    {
        note:"We have added a new activity for you.",
        notification_type:"event",
        notification_date:"Nov 5",
        event_id:"10004",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:"Product1.png"
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 4",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"dashboard",
        notification_date:"Nov 4",
        event_id:"",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:""
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 3",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"event",
        notification_date:"Nov 3",
        event_id:"10004",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:"Product1.png"
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 3",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"dashboard",
        notification_date:"Nov 3",
        event_id:"",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:""
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 2",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"event",
        notification_date:"Nov 2",
        event_id:"10004",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:"Product1.png"
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 2",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"dashboard",
        notification_date:"Nov 2",
        event_id:"",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:""
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 2",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"event",
        notification_date:"Nov 2",
        event_id:"10004",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:"Product1.png"
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 2",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"dashboard",
        notification_date:"Nov 1",
        event_id:"",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:""
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 1",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"event",
        notification_date:"Nov 1",
        event_id:"10004",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:"Product1.png"
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 1",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"We have added a new activity for you.",
        notification_type:"dashboard",
        notification_date:"Nov 1",
        event_id:"",
        title:"Surfing at leisure",
        time:"10:30AM - 7:30PM",
        event_date:"Nov 10-29",
        desc:"",
        img:""
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 1",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
    {
        note:"",
        notification_type:"review",
        notification_date:"Nov 1",
        event_id:"10003",
        title:"Congratulations Charlie!",
        time:"",
        event_date:"",
        desc:"You have completed event \"Surfing at leisure\". Hope you have enjoyed the activity. Please do share your valuable feedback with us to improve and serve you the best.",
        img:"Product1.png"
    },
]



const Notifications = () =>{
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
                                        {rowData.slice(0, limitData).map((item, index)=>{
                                            return(
                                                    <li className="date__list--item"  key={index+"11"}>
                                                        <div className="date">{item.notification_date}</div>
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
                                                                {item.img ?
                                                                    <img src={process.env.PUBLIC_URL + './img/' + item.img}
                                                                      alt="" width="100px" height="100px"/>
                                                                      :<span>UG</span>
                                                                }
                                                            </div>
                                                            <div className="content--wrapper">
                                                                {item.note && <div className="title">{item.note}</div>}
                                                                {item.title && <div className="subtitle">{item.title}</div>}
                                                                {item.time && <div className="details">{item.time}</div>}
                                                                {item.event_date && <div className="details">{item.event_date}</div>}
                                                                {item.desc && <div className="details">{item.desc}</div>}
                                                            </div>
                                                        </div>
                                                        {item.notification_type ==="event" && <Link to={`/eventdetails/10005`} className="btn__transparent">View event</Link>}
                                                        {item.notification_type ==="review" && <button className="btn__transparent" onClick={openModal}>Add a review</button>}
                                                        {item.notification_type ==="dashboard" && <Link to={`/`} className="btn__transparent">Go to Dashboard</Link>}


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

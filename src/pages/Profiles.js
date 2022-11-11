import React, {useEffect, useState} from 'react';
import {Profile} from './../MockData';
import Footer from "../component/Footer";
import Header from "../component/Header";
import {Link} from 'react-router-dom';


const Profiles = () =>{
        const [selectUser, setUserSelect] = useState({});
        const onHandleProfileClick = (e, id, item)=>{
            setUserSelect({[id]: id});
            localStorage.setItem('User',JSON.stringify(item));
        }
        useEffect(()=>{
            let user = Profile[0].Customer_ID;
            setUserSelect({[user]: true});
            localStorage.setItem('User',JSON.stringify(Profile[0]));
        },[])
    return(
        <>
        <Header/>
        <main className="content">
        <div className="profile">
            <div className="container">
                <div className="profile__page">
                    {/*<div className="profile__skip">Skip</div>*/}
                    <div className="profile__title">Profiles</div>
                    <div className="profile__subtitle">We are committed to provide you the best and your favorable
                        experience to you and your family.
                    </div>
                    <div className="profile__content">
                        <h4 className="profile__content--title">Would you like to add your family members?</h4>
                        <ul className="profile__list">
                                {
                                        Profile.map((item,index)=>{
                                                return(
                                                    <li key={index}
                                                        className={`profile__list--item ${selectUser[item.Customer_ID] == item.Customer_ID && 'active'}`}>
                                                            <div className="profile__info">
                                                                    <div className="profile__image"
                                                                         onClick={(e)=>onHandleProfileClick(e, item.Customer_ID, item)}>
                                                                            <div className="profile__image--abstract"></div>
                                                                            <div className="profile__image--overlay"></div>
                                                                            <img src={process.env.PUBLIC_URL + "./img/user.svg"} alt="Profile"/>
                                                                    </div>
                                                                    <div className="profile__name">{item.Customer_Name}</div>
                                                                    <div className="profile__manage">
                                                                            <Link to={`/profiles/${item.Customer_ID}`} className="btn__red">Manage</Link>
                                                                            {/*<a href="index.html" className="btn__red">Manage</a>*/}
                                                                    </div>
                                                            </div>
                                                    </li>
                                                )
                                        })
                                }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer/>
       </>
    )
}

export default Profiles;

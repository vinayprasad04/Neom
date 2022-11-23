import React, {useEffect, useState} from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import {Link, useParams} from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import user from './../assets/img/Charlie.png';
import golf from './../assets/img/golf.jpg';
import music from './../assets/img/music.png';
import exploring from './../assets/img/exploring2.png';
import cookingdinner from './../assets/img/cooking&dinner.png';
import rooms from './../assets/img/Product1.png';
import socializing from './../assets/img/socializing.png';
import plays from './../assets/img/plays.png';
import chinesefood from './../assets/img/chinese-food.png';
import screamingchild from './../assets/img/screaming-child.png';
import walkingforlong from './../assets/img/walking-for-long.png';
import watersports from './../assets/img/water-sports.png';

import {Profile} from './../MockData';
import ReactDOM from "react-dom";
import ThanksAlert from "../component/ThanksAlert";

const activitylist = [
    {name:"Golf", img:golf, select:true,},
    {name:"Music", img:music, select:true,},
   /* {name:"Rooms", img:rooms, select:true,},*/
    {name:"Exploring", img:exploring, select:false,},
    {name:"Socializing", img:socializing,  select:false,},
    {name:"Cooking & dining", img:cookingdinner,  select:true,},
    {name:"Plays", img:plays,  select:false,},
    {name:"Chinese Food", img:chinesefood,  select:false,},
    {name:"Screaming Child", img:screamingchild,  select:false,},
   /* {name:"Walking for long", img:walkingforlong,  select:false,},*/
    {name:"Water Sports", img:watersports,  select:false,},
]

const EditProfile = (props) =>{
    const {id} = useParams();
    const profile = Profile.find((profile) => profile.Customer_ID === '001');
    const {Customer_Name,Contact_Email,Contact_Number, Customer_Image, Gender, dop, Likes} = profile;

    const [activityList, setActivityList] = useState(activitylist);
    const [inputLike, setInputLike] = useState(Likes);

    const [profileValue, setProfileValue] = useState({name:Customer_Name, phone:Contact_Number,dop:dop})
    const [alert, setAlert] = useState(false);
    const onHandleActivity = (e, value, select) => {
        setActivityList(current =>
            current.map(obj => {
                if (obj.name === value) {
                    return {...obj, select: !select};
                }
                return obj;
            }),
        );
    };
    const updateValue = ()=>{
        let likesArray = inputLike.split(",");
        let objs  = likesArray.map((item)=>{
            return {name: item, select:true}
        });
        for(let i = 0; i <objs.length; i++){
            setActivityList(current => [...current, objs[i]]);
        }
    }
    useEffect(()=>{
        updateValue();
        const newArray = activitylist.filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i);
        setActivityList(newArray);
    },[]);

    useEffect(()=>{
        let stringValue = [];
        activityList.map((item,index)=>{
            if(item.select){
                stringValue.push(item.name);
            }
        })
        setInputLike(stringValue);

    },[activityList])

    const onChangeLikesInput = (e) =>{
        setInputLike(e.target.value);
    }
    const onChangeProfile = (e,item)=>{
        if(item ==="name"){
            setProfileValue({...profileValue,name:e.target.value})
        }else if(item ==="phone"){
            setProfileValue({...profileValue,phone:e.target.value})
        }else if(item ==="dop"){
            setProfileValue({...profileValue,dop:e.target.value})
        }


    }
    const onCancelAlert = ()=>{
        setAlert(false);
    }

    const onSubmitHandler = () =>{
        //updateValue();
        setTimeout(()=>{
            setAlert(true);
        },500)

/*        let newArray =  activitylist.filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i);
        setActivityList(newArray);*/
    }

    const [photo, setPhoto] = useState(user);
    const [startDate, setStartDate] = useState(new Date(profileValue.dop));
    const onChangePhoto = (e) =>{
        setPhoto(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            {alert && <ThanksAlert alert={alert} onCancel={onCancelAlert}/>}
            <Header {...props}/>
                <main className="content">
                <div className="profile">
                    <div className="container">
                        <div className="profile__page userPreferences">
                            <h2 className="profile__title">Edit {Customer_Name}'s profile</h2>
                            <div className="profile__edit">
                                <div className="profile__list">
                                    <div className="profile__list--item active">
                                        <div className="profile__info">
                                            <div className="profile__image">
                                                <div className="profile__image--abstract"></div>
                                                <div className="profile__main--image">
                                                    <img src={photo} alt="profile"/>
                                                </div>
                                                <div className="profile__image--overlay"></div>
                                                <input className={"inputPhoto"} type="file" onChange={onChangePhoto} name="filename" accept="image/gif, image/jpeg, image/png"/>
                                                <div className="profile__icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="27.232" height="26"
                                                         viewBox="0 0 27.232 26">
                                                        <g id="Icon_feather-edit-3" data-name="Icon feather-edit-3"
                                                           transform="translate(-3.5 -3.318)">
                                                            <path id="Path_25" data-name="Path 25" d="M18,30H31.5"
                                                                  transform="translate(-1.768 -1.682)" fill="none"
                                                                  stroke="#fff" stroke-linecap="round"
                                                                  stroke-linejoin="round" stroke-width="2"></path>
                                                            <path id="Path_26" data-name="Path 26"
                                                                  d="M23.356,5.189a2.968,2.968,0,0,1,4.19,4.205L10.087,26.916,4.5,28.318l1.4-5.607Z"
                                                                  transform="translate(0 0)" fill="none" stroke="#fff"
                                                                  stroke-linecap="round" stroke-linejoin="round"
                                                                  stroke-width="2"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile__content">
                                    <div className="form__group">
                                        <label className="form__label">What should we call you?</label>
                                        <input type="text" className="form__input" placeholder="" value={profileValue.name} onChange={(e)=>onChangeProfile(e, 'name')} required={true}/>
                                    </div>
                                    <div className="form__group">
                                        <label className="form__label">What's your email address?</label>
                                        <input type="email" className="form__input" placeholder="" value={Contact_Email} disabled/>
                                    </div>
                                    <div className="form__group">
                                        <label className="form__label">On which number can we contact you?</label>
                                        <input type="tel" className="form__input" value={profileValue.phone} placeholder="" onChange={(e)=>onChangeProfile(e, 'phone')} required={true}/>
                                    </div>
                                   {/* <div className="form__group">
                                        <label className="form__label">What is your gender?</label>
                                        <ul className="gender__list">
                                            <li title={"Male"} className={`gender__list--item ${Gender.toUpperCase() == "MALE" && 'active'}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="51.964" height="60"
                                                     viewBox="0 0 51.964 60">
                                                    <path id="Union_3" data-name="Union 3"
                                                          d="M1,60a1,1,0,0,1-1-1,16.969,16.969,0,0,1,16.99-16.99h3v-3.2a14.965,14.965,0,0,1-6.472-8.84c-2.194-.412-3.52-3.611-3.52-5.949a3.8,3.8,0,0,1,1.52-3.3A12.991,12.991,0,0,1,31.483,4.161a8.986,8.986,0,0,1,7.98,15.091,3.6,3.6,0,0,1,2.508,3.773c0,2.253-1.233,5.3-3.282,5.889a15.014,15.014,0,0,1-6.71,9.9v3.2h3A17.01,17.01,0,0,1,51.964,59a1,1,0,0,1-1,1ZM31.777,44.612l-.151.2-2.581,3.447L30.816,58H49.934A15.013,15.013,0,0,0,34.976,44.011h-3A1.006,1.006,0,0,1,31.777,44.612ZM23.184,58h5.6l-1.63-8.994H24.819ZM6.383,48.4A14.919,14.919,0,0,0,2.032,58H21.152l1.771-9.745-2.735-3.646a1,1,0,0,1-.2-.6H16.958A14.933,14.933,0,0,0,6.383,48.4Zm15.6-4.717,2.5,3.33h2.988l2.508-3.333V39.9c-.088.039-.182.063-.27.1-.39.163-.788.308-1.192.437-.155.047-.3.1-.453.141a15.574,15.574,0,0,1-1.62.372l-.3.047a.881.881,0,0,1-.328,0l-.3-.047a15.532,15.532,0,0,1-1.618-.379c-.153-.039-.3-.091-.453-.139q-.6-.193-1.185-.434c-.092-.038-.187-.062-.277-.1Zm-.5-6.269a13.128,13.128,0,0,0,4.366,1.569l.131.022.136-.018a12.736,12.736,0,0,0,4.357-1.567,13.026,13.026,0,0,0,6.378-9.534,11.4,11.4,0,0,0,.122-1.718V20.029a1.733,1.733,0,0,0-.058-.426A9.6,9.6,0,0,0,34,15.713c-.233-.22-.481-.439-.739-.661-.888-.763-1.729-1.395-2.262-1.78l-4.8,3.637a15.072,15.072,0,0,1-9.013,3.1h-.226a1.89,1.89,0,0,0-.562.093c-.029.009-.058.015-.085.025a2.071,2.071,0,0,0-.5.256l-.012.01a2.044,2.044,0,0,0-.4.391c-.01.015-.024.027-.036.042a1.9,1.9,0,0,0-.256.491c-.012.034-.022.068-.032.1a1.823,1.823,0,0,0-.093.54v4.206a12.286,12.286,0,0,0,.277,2.626h0A13.007,13.007,0,0,0,21.486,37.411ZM11.993,24.026a6.008,6.008,0,0,0,1.044,3.3c-.031-.385-.044-.773-.044-1.161V22.389c-.047-.044-.092-.09-.137-.135A1.761,1.761,0,0,0,11.993,24.026Zm26.98,2.229a6,6,0,0,0,1-3.23c0-.987-.316-1.584-1-1.844ZM12.04,8.345A11,11,0,0,0,13.5,20.029a3.949,3.949,0,0,1,1.661-1.584h.01a3.853,3.853,0,0,1,.528-.221l.049-.017a3.957,3.957,0,0,1,.518-.127.405.405,0,0,1,.085-.017,3.925,3.925,0,0,1,.6-.053h.234a13.014,13.014,0,0,0,7.758-2.654l5.43-4.119a1,1,0,0,1,1.158-.034,34.992,34.992,0,0,1,3.032,2.33c.389.335.74.661,1.077.983l.27.262c.265.261.511.518.742.771.056.061.117.125.173.187q.4.453.725.886l.151.21q.245.342.443.671c.027.042.066.1.094.143a7,7,0,0,0-6.9-11.416A.994.994,0,0,1,30.36,5.9,11,11,0,0,0,12.04,8.345ZM21.172,31.84a.887.887,0,0,1,1.481-.976,4.421,4.421,0,0,0,3.331,1.857,4.438,4.438,0,0,0,3.333-1.857.886.886,0,0,1,1.479.976,6.156,6.156,0,0,1-4.812,2.652A6.16,6.16,0,0,1,21.172,31.84Zm3.019-3.379c-.968-1.544.185-3.783.319-4.033a.886.886,0,0,1,1.561.839c-.331.625-.681,1.773-.379,2.255.234.374,1,.4,1.431.382a.885.885,0,1,1,.073,1.769c-.095,0-.187,0-.277,0A2.973,2.973,0,0,1,24.191,28.46Zm5.8-4.84a1.639,1.639,0,0,1,1.455-1.8,1.638,1.638,0,0,1,1.455,1.8,1.637,1.637,0,0,1-1.455,1.8A1.638,1.638,0,0,1,29.991,23.62Zm-10.925,0a1.637,1.637,0,0,1,1.455-1.8,1.636,1.636,0,0,1,1.455,1.8,1.637,1.637,0,0,1-1.455,1.8A1.638,1.638,0,0,1,19.066,23.62Z"
                                                          transform="translate(0 0)" opacity="0.5"/>
                                                </svg>
                                            </li>
                                            <li title={"Female"} className={`gender__list--item ${Gender.toUpperCase() == "FEMALE" && 'active'}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="60"
                                                     viewBox="0 0 48 60">
                                                    <g id="avatar-woman-girl-person-user" opacity="0.5">
                                                        <path id="Path_227" data-name="Path 227"
                                                              d="M26,21a3,3,0,0,0-3,3h2a1,1,0,0,1,2,0h2A3,3,0,0,0,26,21Z"
                                                              transform="translate(-8 -2)"/>
                                                        <path id="Path_228" data-name="Path 228"
                                                              d="M38,23a1,1,0,0,1,1,1h2a3,3,0,1,0-6,0h2A1,1,0,0,1,38,23Z"
                                                              transform="translate(-8 -2)"/>
                                                        <path id="Path_229" data-name="Path 229"
                                                              d="M49.29,43.46,37,40.23V37a13.043,13.043,0,0,0,6-5.1V34a9.014,9.014,0,0,0,9,9h2a1,1,0,0,0,1-1V34a9.009,9.009,0,0,0-7.18-8.81A4.934,4.934,0,0,0,49,22a4.987,4.987,0,0,0-1-2.97V18a16,16,0,1,0-32,0v1.03a4.959,4.959,0,0,0,3.16,7.88A13.017,13.017,0,0,0,27,37v3.23L14.7,43.46A9.03,9.03,0,0,0,8,52.17V61a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V52.17A9.028,9.028,0,0,0,49.29,43.46ZM53,34v7H52a7.008,7.008,0,0,1-7-7V27h1A7.008,7.008,0,0,1,53,34ZM47,22a2.994,2.994,0,0,1-2,2.81V19.18a3.179,3.179,0,0,1,1.12.69A3.013,3.013,0,0,1,47,22ZM19,24.82a3,3,0,0,1-1.13-4.94,3.1,3.1,0,0,1,1.13-.7Zm-.97-7.41a13.982,13.982,0,0,1,27.94,0,4.794,4.794,0,0,0-1.6-.37l-6.79-4.85a.982.982,0,0,0-.86-.15L19.78,17.02a4.956,4.956,0,0,0-1.75.39ZM21,25V18.75L36.81,14.1,43,18.51V25a11,11,0,1,1-22,0Zm7.25,16.97A1.014,1.014,0,0,0,29,41V37.64a12.68,12.68,0,0,0,6,0V41a1.014,1.014,0,0,0,.75.97l3.2.84a7,7,0,0,1-13.9,0ZM54,60H46.46A5.99,5.99,0,0,0,42,50v2a4,4,0,0,1,0,8H22a4,4,0,0,1,0-8V50a5.99,5.99,0,0,0-4.46,10H10V52.17a7.019,7.019,0,0,1,5.21-6.77l7.9-2.08a8.985,8.985,0,0,0,17.78,0l7.89,2.08A7.017,7.017,0,0,1,54,52.17Z"
                                                              transform="translate(-8 -2)"/>
                                                        <path id="Path_230" data-name="Path 230"
                                                              d="M35,30H33a1,1,0,1,1-2,0H29a3,3,0,1,0,6,0Z"
                                                              transform="translate(-8 -2)"/>
                                                    </g>
                                                </svg>
                                            </li>
                                            <li title={"Other"} className={`gender__list--item ${Gender.toUpperCase() == "OTHER" && 'active'}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="57.498" height="60.3"
                                                     viewBox="0 0 57.498 60.3">
                                                    <g id="bigender" transform="translate(0.15 0.15)" opacity="0.5">
                                                        <path id="Path_220" data-name="Path 220"
                                                              d="M280.193,164.19a1.841,1.841,0,1,0-1.455-1.8A1.637,1.637,0,0,0,280.193,164.19Zm0,0"
                                                              transform="translate(-246.132 -141.771)" fill="#222"
                                                              stroke="#222" strokeWidth="0.3"/>
                                                        <path id="Path_221" data-name="Path 221"
                                                              d="M188.429,162.39a1.488,1.488,0,1,0-1.455,1.8A1.637,1.637,0,0,0,188.429,162.39Zm0,0"
                                                              transform="translate(-163.838 -141.771)" fill="#222"
                                                              stroke="#222" strokeWidth="0.3"/>
                                                        <path id="Path_222" data-name="Path 222"
                                                              d="M202.641,234.532a.886.886,0,0,0-.255,1.227,5.69,5.69,0,0,0,9.624,0,.886.886,0,0,0-1.479-.975,3.92,3.92,0,0,1-6.665,0A.886.886,0,0,0,202.641,234.532Zm0,0"
                                                              transform="translate(-178.6 -206.92)" fill="#222"
                                                              stroke="#222" strokeWidth="0.3"/>
                                                        <path id="Path_223" data-name="Path 223"
                                                              d="M229.072,184.59q.135,0,.276-.005a.886.886,0,0,0-.074-1.771c-.433.018-1.2-.007-1.431-.382-.3-.483.046-1.63.378-2.254a.886.886,0,0,0-1.561-.839c-.135.25-1.287,2.486-.32,4.032a2.973,2.973,0,0,0,2.731,1.219Zm0,0"
                                                              transform="translate(-199.537 -157.912)" fill="#222"
                                                              stroke="#222" strokeWidth="0.3"/>
                                                        <path id="Path_224" data-name="Path 224"
                                                              d="M12.233,58.228H2.374a20.374,20.374,0,0,1,.477-2.388,9.327,9.327,0,0,1,2.679-4.9c2.574-2.081,13.461-7.913,17.045-9.813a6.67,6.67,0,0,0,13.046,0c1.341.71,3.7,1.97,6.253,3.37a.886.886,0,1,0,.852-1.554c-3.074-1.687-5.874-3.172-6.957-3.743V35.062c.194-.176.385-.358.569-.553a13.222,13.222,0,0,0,2.561-4.1,4.965,4.965,0,0,0,.863.078,4.348,4.348,0,0,0,3.58-1.88c1.61-2.187,1.855-5.876.514-7.741-.028-.038-.056-.076-.085-.113.588-3.8,1.075-8.789.247-11.815-.934-3.413-2.978-6.026-5.333-6.817a4.72,4.72,0,0,0-3.981.425A8.512,8.512,0,0,0,29.161,0h-.04C17.843.019,11.541,8.979,10.9,25.914a.886.886,0,0,0,.852.919h.034a.886.886,0,0,0,.885-.852c.27-7.086,1.548-12.726,3.8-16.763a14.632,14.632,0,0,1,4.931-5.4A14.339,14.339,0,0,1,29.1,1.772,7,7,0,0,1,33.855,4.25a.885.885,0,0,0,1.245.166,3.119,3.119,0,0,1,3.021-.609c1.776.6,3.42,2.8,4.189,5.605.551,2.012.5,5.576-.147,10.121a3.115,3.115,0,0,0-1.487-.139c-.007-.243-.015-.387-.016-.41a.887.887,0,0,0-.349-.654,23.1,23.1,0,0,1-6.661-9.062A.887.887,0,0,0,32.083,9.1c-.042.063-4.261,6.291-13.845,9.013a.886.886,0,0,0-.642.794,31.846,31.846,0,0,0,.258,5.758c.576,4.3,1.909,7.6,3.96,9.8.2.212.4.41.613.6V39.2c-1.288.679-4.91,2.6-8.624,4.662a105.413,105.413,0,0,1-1.185-14.386.886.886,0,0,0-1.772.014,105.955,105.955,0,0,0,1.306,15.3,74.324,74.324,0,0,0-7.737,4.775C.972,52.342.518,58.784.5,59.057A.886.886,0,0,0,1.385,60H12.234a.886.886,0,0,0,0-1.772ZM34,39.729a4.9,4.9,0,0,1-9.8,0v-3.4a10.043,10.043,0,0,0,4.867,1.183h.042A10.016,10.016,0,0,0,34,36.332ZM40.362,24.74a33.54,33.54,0,0,0,.3-3.538,1.492,1.492,0,0,1,1.751.7c.814,1.132.742,3.964-.5,5.655A2.569,2.569,0,0,1,39.5,28.709a26,26,0,0,0,.86-3.969Zm-21.02-5.1A28.3,28.3,0,0,0,32.6,11.314a24.961,24.961,0,0,0,6.3,8.16c.045,1.832,0,9.741-3.853,13.818a7.85,7.85,0,0,1-5.944,2.449h-.035a7.857,7.857,0,0,1-5.959-2.485c-3.683-3.944-3.815-11.435-3.77-13.62Zm0,0"
                                                              transform="translate(-0.499 0)" fill="#222" stroke="#222"
                                                              strokeWidth="0.3"/>
                                                        <path id="Path_225" data-name="Path 225"
                                                              d="M166.119,394.664c-.017-.273-.471-6.715-3.914-9.5a72.548,72.548,0,0,0-7.95-4.894.886.886,0,1,0-.869,1.544,67.2,67.2,0,0,1,7.705,4.728c2.147,1.736,2.909,5.524,3.155,7.292H124.2a.886.886,0,0,0,0,1.772h41.033a.886.886,0,0,0,.884-.943Zm0,0"
                                                              transform="translate(-108.924 -335.607)" fill="#222"
                                                              stroke="#222" strokeWidth="0.3"/>
                                                    </g>
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>*/}
                                    <div className="form__group profileIconWrap">
                                        <label className="form__label">When can we wish a happy birthday?</label>
                                        <span className={"icon-calendar profileIcon"}></span>
                                        <DatePicker className="form__input" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                                      {/*  <input type="text"  className="form__input"  value={profileValue.dop} placeholder="" onChange={(e)=>onChangeProfile(e, 'dop')}/>*/}
                                    </div>
                                    <ul className="activity__list">
                                        {
                                            activityList?.map((item, index)=>{
                                                return(
                                                    <li key={index} onClick={(e)=>onHandleActivity(e, item.name, item.select)} className={`activity__list--item ${item.select && "active" }`}>
                                                        <div className="activity__info">
                                                            <div className="activity__image">
                                                                {item.img ? <img src={item.img} alt="activity"/>:<img src={walkingforlong} alt="activity"/>}
                                                                <div className="activity__image--overlay"></div>
                                                                <div className="activity__name">{item.name}</div>
                                                            </div>
                                                            <div className="activity__selected">
                                                                <div className="icon-thumbs-up"></div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                        {/*<li className="activity__list--item active">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={golf} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Golf</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={music} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Music</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item active">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={exploring} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Exploring</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={cookingdinner} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Cooking & dining</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={standupcomedy} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Stand up comedy</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={socializing} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Socializing</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={plays} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Plays</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={chinesefood} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Chinese Food</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={screamingchild} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Screaming Child</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={walkingforlong} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Walking for long</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="activity__list--item">
                                            <div className="activity__info">
                                                <div className="activity__image">
                                                    <img src={watersports} alt="activity"/>
                                                    <div className="activity__image--overlay"></div>
                                                    <div className="activity__name">Water Sports</div>
                                                </div>
                                                <div className="activity__selected">
                                                    <div className="icon-thumbs-up"></div>
                                                </div>
                                            </div>
                                        </li>*/}
                                    </ul>
                                    <div className="form__group m-0">
                                        <label className="form__label">Please let us know if you have some
                                            interests</label>
                                        <input type="text" className="form__input" value={inputLike} onChange={onChangeLikesInput}
                                               placeholder="Add multiple interests comma ( , ) separated" disabled/>
                                    </div>
                                    <div className="btn--wrap">
                                        <button className="btn btn__red" onClick={onSubmitHandler}>Save</button>
                                        <button className="btn btn__transparent">Cancel</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EditProfile;

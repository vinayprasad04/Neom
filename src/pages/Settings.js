import React, {useEffect} from 'react';
import {
    Header,
    Footer,
} from "../component/index.js";
import {Profile} from "../MockData";
const Settings = (props) =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <Header {...props}/>
            <main className="content">
                <div className="settings">
                    <div className="container">
                        <h2 className="settings__title">Good morning {Profile[0].Customer_Name}!</h2>
                        <div className="settings__subtitle">You can change the settings for your personal data and other
                            information.
                        </div>
                        <ul className="settings__list">
                            <li className="settings__list--item">
                                <div className="settings__flex--row">
                                    <h4 className="settings__list--title">Personal and Account Information</h4>
                                    <p className="settings__list--details">Would you like to share your personal
                                        information with us to know you better?</p>
                                </div>
                                <div className="form__group--toggle">
                                    <input type="checkbox" id="switch1" className="checkbox"/>
                                    <label htmlFor="switch1" className="toggle"></label>
                                </div>
                            </li>
                            <li className="settings__list--item">
                                <div className="settings__flex--row">
                                    <h4 className="settings__list--title">Consent for sharing information with
                                        operators</h4>
                                    <p className="settings__list--details">Would you like to share your personal
                                        information with the operator to serve you better?</p>
                                </div>
                                <div className="form__group--toggle">
                                    <input type="checkbox" id="switch2" className="checkbox"/>
                                    <label htmlFor="switch2" className="toggle"></label>
                                </div>
                            </li>
                            <li className="settings__list--item">
                                <div className="settings__flex--row">
                                    <h4 className="settings__list--title">Manage your data</h4>
                                    <p className="settings__list--details">Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod?</p>
                                </div>
                                <div className="form__group--toggle">
                                    <input type="checkbox" id="switch3" className="checkbox"/>
                                    <label htmlFor="switch3" className="toggle"></label>
                                </div>
                            </li>
                            <li className="settings__list--item">
                                <div className="settings__flex--row">
                                    <h4 className="settings__list--title">Password and Security</h4>
                                    <p className="settings__list--details">Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod?</p>
                                </div>
                                <div className="form__group--toggle">
                                    <input type="checkbox" id="switch4" className="checkbox"/>
                                    <label htmlFor="switch4" className="toggle"></label>
                                </div>
                            </li>
                            <li className="settings__list--item settings__list--item-column">
                                <div className="settings__flex--row">
                                    <h4 className="settings__list--title">Notifications</h4>
                                    <p className="settings__list--details">Which type of notifications would you like to
                                        receive?</p>
                                </div>
                                <div className="settings__toggle--list">
                                    <div className="form__group--toggle">
                                        <input type="checkbox" id="switch5" className="checkbox" checked={true}/>
                                        <label htmlFor="switch5" className="toggle"></label>
                                        <span>Emails</span>
                                    </div>
                                    <div className="form__group--toggle">
                                        <input type="checkbox" id="switch6" className="checkbox" checked={true}/>
                                        <label htmlFor="switch6" className="toggle"></label>
                                        <span>Newsletters</span>
                                    </div>
                                    <div className="form__group--toggle">
                                        <input type="checkbox" id="switch7" className="checkbox" checked={true}/>
                                        <label htmlFor="switch7" className="toggle"></label>
                                        <span>Personalized notifiations</span>
                                    </div>
                                </div>
                            </li>

                            <li className="settings__list--item settings__list--item-column">
                                <div className="settings__flex--row">
                                    <h4 className="settings__list--title">Language</h4>
                                    <p className="settings__list--details">Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod?</p>
                                </div>
                                <div className="settings__toggle--list">
                                    <label className="radio-container">English
                                        <input type="radio" checked="checked" name="radio"/>
                                            <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">French
                                        <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Arabic
                                        <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                    </label>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Settings;

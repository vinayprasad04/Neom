import React from 'react';
import {Link} from "react-router-dom";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                {/* <div class="footer__grid">
                    <div class="footer__item">
                        <div class="footer__item__title">Unified Guests</div>
                        <ul>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">About Unified Guests</a>
                            </li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Newsroom</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">About founders</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Careers</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Investors</a></li>
                        </ul>
                    </div>
                    <div class="footer__item">
                        <div class="footer__item__title">Support</div>
                        <ul>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Help center</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Safety information</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Cancellation option</a>
                            </li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Our COVID-19 response</a>
                            </li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Report your concern</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__item">
                        <div class="footer__item__title">Legals</div>
                        <ul>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Privacy policy</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Cookie policy</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Terms of use</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div class="footer__item">
                        <div class="footer__item__title">Top locations</div>
                        <ul>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Jumeirah Palm</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Al Bastakiya</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Bur Dubai</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Al Karama</a></li>
                            <li class="footer__item__row"><a href="#" class="footer__item__link">Dubai Marina</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="footer__copy">
                    <div className="footer__copyright">
                       {/* <p>&copy; 2022 Unified guests. Rights reserved</p>*/}
                        <p>Copyright &copy; Neom Sindalah. All Rights Reserved.</p>
                    </div>
                    <div className="footer__social">
{/*                         <a href="#" class="footer__social__link"><span class="icon-twitter"></span></a>
                        <a href="#" class="footer__social__link"><span class="icon-facebook"></span></a>
                        <a href="#" class="footer__social__link"><span class="icon-pinterest"></span></a>
                        <a href="#" class="footer__social__link"><span class="icon-instagram"></span></a> */}
                        <Link className={"footer__social__link"}>Terms of Use</Link>
                        <Link className={"footer__social__link"}>Privacy</Link>
                        <Link className={"footer__social__link"}>Cookie</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

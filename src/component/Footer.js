import React from 'react';

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__item">
                        <div className="footer__item__title">Unified Guests</div>
                        <ul>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">About Unified Guests</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Newsroom</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">About founders</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Careers</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Investors</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item__title">Support</div>
                        <ul>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Help center</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Safety information</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Cancellation option</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Our COVID-19 response</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Report your concern</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item__title">Legals</div>
                        <ul>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Privacy policy</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Cookie policy</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Terms of use</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Disclaimer</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item__title">Top locations</div>
                        <ul>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Jumeirah Palm</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Al Bastakiya</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Bur Dubai</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Al Karama</a></li>
                            <li className="footer__item__row"><a href="#" className="footer__item__link">Dubai Marina</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copy">
                    <div className="footer__copyright">
                        <p>&copy; 2022 Unified guests. Rights reserved</p>
                    </div>
                    <div className="footer__social">
                        <a href="#" className="footer__social__link"><span className="icon-twitter"></span></a>
                        <a href="#" className="footer__social__link"><span className="icon-facebook"></span></a>
                        <a href="#" className="footer__social__link"><span className="icon-pinterest"></span></a>
                        <a href="#" className="footer__social__link"><span className="icon-instagram"></span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

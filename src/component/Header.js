import React from 'react';

const Header = () =>{
    return(
        <header className="header">
            <div className="container">
                <div className="header__branding"><a href="index.html" className="header__branding__logo icon-logo"></a></div>
                <nav className="header__menu">
                    <ul className="header__nav">
                        <li className="header__nav__item header__nav__item--mobile"><a href="dashboard.html" className="header__nav__link header__nav__link--underline">Dashboard</a></li>
                        <li className="header__nav__item header__nav__item--mobile"><a href="myfavorites.html" className="header__nav__link header__nav__link--underline">My favorites</a></li>
                        <li className="header__nav__item header__nav__item--mobile"><a href="#" className="header__nav__link header__nav__link--underline">Upcoming events</a></li>
                        <li className="header__nav__item header__nav__item--notifications">
                            <a href="#" className="header__nav__link"><span className="icon-bell"></span>

                                <span className="circle"></span>
                            </a>
                        </li>
                        <li className="header__nav__item header__nav__item--menu">
                            <a href="#" className="header__nav__link">
                                <div className="header__nav__link__menu">
                                    <span className="icon-menu"></span>
                                    <div className="header__nav__link__user">
                                        <div className="header__nav__link__user--init">S</div>

                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-menu">
                                <ul className="nav">
                                    <li className="nav__item nav__item--mobile"><a href="#" className="nav__link">Dashboard</a></li>
                                    <li className="nav__item nav__item--mobile"><a href="#" className="nav__link">My favorites</a></li>
                                    <li className="nav__item nav__item--mobile"><a href="#" className="nav__link">Upcoming events</a></li>
                                    <li className="nav__divider nav__item--mobile"></li>
                                    <li className="nav__item"><a href="profiles.html" className="nav__link">Manage profiles</a></li>
                                    <li className="nav__item"><a href="#" className="nav__link">Feedback</a></li>
                                    <li className="nav__item"><a href="#" className="nav__link">Settings</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="header__nav__item header__nav__item--languages">
                            <div role="button" className="header__nav__link"><span className="icon-globe"></span></div>
                            <div className="dropdown-menu dropdown-menu--sm">
                                <ul className="nav">
                                    <li className="nav__item"><a href="#english" className="nav__link nav__link--selected">English</a></li>
                                    <li className="nav__item"><a href="#french" className="nav__link">French</a></li>
                                    <li className="nav__item"><a href="#arabic" className="nav__link">Arabic</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;

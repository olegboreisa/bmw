import React from 'react';
import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="logos-container">
                    <div className="logos-wrapper">
                        <div className="group">
                            <img className="bmw-group" src={require('../../assets/bmwgroup.png')} alt="BMW Group Logo" />
                        </div>
                        <div className="group-brands">
                            <img className="bmw" src={require('../../assets/bmw.png')} alt="BMW Logo" />
                            <img className="mini" src={require('../../assets/mini.png')} alt="Mini Logo" />
                            <img className="rolls" src={require('../../assets/rolls.png')} alt="Rolls Royce Logo" />
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <div className="content-wrapper">
                        <div className="info">
                            <div>Mein Konto</div>
                            <div>Warenkorb</div>
                            <div>Logout</div>
                        </div>
                        <div className="lang">
                            <div>DE</div>
                            <div>EN</div>
                        </div>
                        <div className="menu">
                            <div>
                                <FontAwesomeIcon icon={faSearch} size="1x"/>
                            </div>
                            <div>MENU</div>
                            <div>
                                <FontAwesomeIcon icon={faBars} size="1x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
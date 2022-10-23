import React from 'react';
import style from './Nav.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';

const Nav = () => {
    console.log("RERENDER")

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className={style.container}>
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
                            <div>{t('myAccount')}</div>
                            <div>{t('shoppingCart')}</div>
                            <div>{t('logout')}</div>
                        </div>
                        <div className="lang">
                            <div onClick={() => changeLanguage("de")}>
                                {t('de')}
                            </div>
                            <div onClick={() => changeLanguage("en")}>
                                {t('en')}
                            </div>
                        </div>
                        <div className="menu">
                            <div>
                                <FontAwesomeIcon icon={faSearch} size="1x"/>
                            </div>
                            <div>{t('menu')}</div>
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

export default Nav;
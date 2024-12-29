    import React from 'react';
    import './Footer.css';

    const Footer = () => {
    return (
        <footer>
        <div className="footer-container">

        <div className="footer-column">
            <div className="footer-logo">
                <h4>Powered By</h4>
                <img src="/images/dic.png" alt="DIC Logo" className="dic-logo" />
            </div>
            <ul>
                <li>Digital India Corporation (DIC)</li>
                <li>Ministry of Electronics & IT (MeitY)</li>
                <li>Government of India ®</li>
            </ul>
            </div>

            <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#screen-reader">Screen Reader</a></li>
                <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
            </div>

            <div className="footer-column">
            <h4>Useful Links</h4>
            <div className="useful-links">
                <img src="/images/dic.png" alt="Digital India" />
                <img src="/images/digilocker 1.png" alt="DigiLocker" />
                <img src="/images/umang.png" alt="UMANG" />
                <img src="/images/indiaGov.png" alt="India Gov" />
                <img src="/images/mygov.png" alt="MyGov" />
                <img src="/images/dataGov.png" alt="Data.gov.in" />
                <img src="/images/igod 1.png" alt="IGOD" />
            </div>
            </div>

            <div className="footer-column">
            <h4>Get in Touch</h4>
            <ul>
                <li>Email: info[at]anukampa[dot]gov</li>
                <li>Call: 0123456789</li>
                <li>Address: Campus 7, KIIT Road, Patia, Bhubaneswar</li>
            </ul>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;

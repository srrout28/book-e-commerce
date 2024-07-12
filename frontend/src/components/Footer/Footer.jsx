import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

// Footer Component...
function Footer() {
    return (
        <>
            <div className="footer" id='footer'>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} height={"70px"} alt="logo" />
                        <p>"Unlock Worlds: Your Next Chapter Awaits!"</p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="facebook" />
                            <img src={assets.twitter_icon} alt="twitter" />
                            <img src={assets.linkedin_icon} alt="linkedin" />
                        </div>
                    </div>

                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>

                    <div className="footer-content-right">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>+91-9152126282</li>
                            <li>info@bookstore.com</li>
                            <li>Soro, Odisha, India, PIN-756045</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">Copyright 2024 &copy; bookstore.com - All Right Reserved.</p>
            </div>
        </>
    )
}

export default Footer;
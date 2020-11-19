import React from 'react'
import facebookWhite from '../assets/social/facebook-white.svg';
import twitterWhite from '../assets/social/twitter-white.svg';
import instagramWhite from '../assets/social/instagram-white.svg';

import appStore from '../assets/store/app-store.svg';
import googlePlay from '../assets/store/play-store.svg';
import windowsStore from '../assets/store/windows-store.svg';
export const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <span>Home | </span>
                <span>Terms and Conditions | </span>
                <span>Privacy Policy | </span>
                <span>Collection Statement | </span>
                <span>Help | </span>
                <span>Manage Account</span>
            </div>
            <div className="copyright">
                Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
            </div>
            <div className="bottom-icons">
                <div className="left-icons">
                <img src={facebookWhite} alt="facebook" />
                <img src={twitterWhite} alt="twitter" />
                <img src={instagramWhite} alt="instagram" />
                </div>
                <div className="right-icons">
                <img src={windowsStore} alt="microsoft store" />
                <img src={googlePlay} alt="google play" />
                    <img src={appStore} alt="apple" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
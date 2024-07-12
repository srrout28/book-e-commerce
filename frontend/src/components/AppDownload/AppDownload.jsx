import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

// App download...
function AppDownload() {
  return (
    <>
        <div className="app-download" id="app-download">
            <p>For Better Experience Download <br /><b style={{color:'orange'}}>BookStore</b> App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Google Playstore" />
                <img src={assets.app_store} alt="Apple Store" />
            </div>
        </div>
    </>
  )
}

export default AppDownload;
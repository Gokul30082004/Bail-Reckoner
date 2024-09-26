import React from "react";
import "./style.css";
import { useState } from 'react';


export const Citizen = () => {

  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };


  return (
    <div className="citizen">
  <div id="login-box">
    <div id="form-box">
      <div>
        <h1 class="form-box-h1">Login to continue</h1>
        <div className="header">
            <a onClick={() => handleLinkClick('Citizen')}>Citizen</a>
            <a onClick={() => handleLinkClick('Advocate')}>Advocate</a>
            <a onClick={() => handleLinkClick('Judge')}>Judge</a>
            <a onClick={() => handleLinkClick('Clerk')}>Clerk</a>
            <a onClick={() => handleLinkClick('PP')}>PP</a>
        </div>
        <br/>
        
        {selectedLink === 'Citizen' && <div><input type="email" name="uemail" class="uemail" placeholder="Phone No" required="" /><br/><br/>
        <input type="text" id="upasskey" name="upasskey" class="upasskey" placeholder="OTP" required=""/></div>}


        {selectedLink === 'Advocate' && <div><input type="email" name="uemail" class="uemail" placeholder="Advocate Id" required="" /><br/><br/>
          <input type="password" id="upasskey" name="upasskey" class="upasskey" placeholder="Password" required=""/></div>}
        
        {selectedLink === 'Judge' && <div><input type="email" name="uemail" class="uemail" placeholder="Judge Id" required="" /><br/><br/>
          <input type="password" id="upasskey" name="upasskey" class="upasskey" placeholder="Password" required=""/></div>}

        {selectedLink === 'Clerk' && <div><input type="email" name="uemail" class="uemail" placeholder="Clerk Id" required="" /><br/><br/>
          <input type="PP" id="upasskey" name="upasskey" class="upasskey" placeholder="Password" required=""/></div>}
        
        {selectedLink   === 'PP' && <div><input type="email" name="uemail" class="uemail" placeholder="Public Prosecutor Id" required="" /><br/><br/>
            <input type="PP" id="upasskey" name="upasskey" class="upasskey" placeholder="Password" required=""/></div>}
        {/* <button class="eyebtn" id="eyebtn" type="button" onclick="show_hide()"><i class="bi bi-eye-fill"></i></button> */}
        <br/><br/>
        <input type="submit" name="submit" class="login-btn" value="Login"/>
      </div>
    </div>
    <div id="image-box"></div>
  </div>
  </div>
  );
};

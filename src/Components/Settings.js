import React from "react";
import { NavLink } from "react-router-dom";

const Settings = () => {
    return (
      <div className="client-settings">
        <h2> Settings</h2>
        <form className="setting-area">
          <p>Select background: (Dark or Light)</p>
          <div className="dark-light">
            <label>  
            <input type="radio" value="light" defaultChecked  />
            Light
            <br/>
            <input type="radio" value="dark" />
            Dark</label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  };
  
  export default Settings;
  
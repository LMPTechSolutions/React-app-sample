import React from "react";
import { NavLink } from "react-router-dom";

const Support = () => {
    return (
      <div className="client-support">
        <h2> Contact Support</h2>
        <form>
          <label>
            Theme type Question: 
            <input type="text" name="Q" placeholder="?"/>
          </label><br/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  
  export default Support;

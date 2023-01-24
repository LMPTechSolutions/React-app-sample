import React from "react";
import { NavLink } from "react-router-dom";

const PreviosNext = () => {
    return (                                         
    <div className="static-area">
        <nav className="button-area">
        <button type="button" className="previous-button" aria-label="Previous">
        <svg viewBox="0 0 20 20">
            <path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"></path>
        </svg>
        </button>
        <button type="button" className="next-button" aria-label="Next">
        <svg viewBox="0 0 20 20">
            <path d="M17.707 9.293l-5-5a.999.999 0 1 0-1.414 1.414L14.586 9H3a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
        </svg>
        </button>
        </nav>
    </div>
    );
  }
  
  export default PreviosNext;
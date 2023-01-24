import React from "react";

const AccordionItem = ({ note, onToggle, active  }) => {
    const { name, description, timestamp, link_text, link } = note;
    return (
      <li className={`accordion-item ${active ? "active" : ""}`}>
        <button className="button" onClick={onToggle}> 
          <div className="note-text">
            <div className={ note.checked ? 'note-dot note-checked' : 'note-dot not-checked'}>
            </div>
            <p> {name} <br/><span> {timestamp} </span></p>
          </div>
          <span className="control">{active ? "x" : "▾"}</span>
        </button>
        <div className={`answer_wrapper ${active ? "open" : ""}`}>
          <div className="answer">
           <p>{description}<a href="{link}"> {link_text}</a></p>
          </div>
        </div>
      </li>
    );
  };
  
  export default AccordionItem;
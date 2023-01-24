import React from "react";
import AccordionItem from "./AccordionItem";
import { useState } from "react";




const Accordion = (prop) => {

    const [clicked, setClicked] = useState("0");
    const [checked, setChecked] = useState("0");


    const handleToggle = (index) => {
        if (clicked === index) {
         return setClicked("0");
        }
        setClicked(index);
        prop.note[index].checked = true;

        console.log("prop note", prop.note[index].checked);
        console.log("index", index);

        prop.handleClick(index);


        
    };
    console.log("props", prop)
    
  return (
    <ul className="accordion">
        {prop.note.map((note, index) => (
        <AccordionItem 
            onToggle={() =>{ 
              handleToggle(index);
              setChecked(true);
            }}
            
            active={clicked === index}
            key={index} 
            note={note} />
        ))}
    </ul>
  );
};

export default Accordion;
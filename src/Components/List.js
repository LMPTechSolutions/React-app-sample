import React from "react";
import { NavLink } from "react-router-dom";

function List(props) {
    return (
        <>
            <ul>
                {/* Use Object.entries method:

                    const petList = Object.entries(fido).map(([key,value])=>{
                        return (
                            <div>{key} : {value.toString()}</div>
                        );
                    }) 
                */}
                {props.list.map((status, index) => {
                    const limit =  props.limit ?  props.limit : 100;
                    if (index < limit) {
                        return (
                            <li key={status.id}>
                                <span className="name-column"><a href="#">{status.name}</a></span>
                                <span className="status-column">{status.status}</span>
                                <span className="phase-column">{status.phase}</span>
                                <span className="call-column">{status.nextCall}</span>
                                <NavLink 
                                  to={`/dashboard/clientlist/${status.id}`}
                                  key={status.id}
                                  >⌵</NavLink>
                            </li>
                        )
                    }
                })}
            </ul> 


           
        </>
    )
}

export default List

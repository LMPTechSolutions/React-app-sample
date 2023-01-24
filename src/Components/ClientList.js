import React from "react";


import { getCLients } from './Api';
import List from './List';
import { useEffect, useState } from "react";
import PreviosNext from './PreviousNext';
import Search from './Search';
import { Link, Outlet, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class ClientList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          setClients:[]
          
      }
      this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount(){ 
    const doGetUsers = async () => {
      try {
        const result = await getCLients();
        // setUsers(result);
        this.setState({
          setClients: result
        }); 
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    doGetUsers();
  }

  handleEdit = async (id) => {

    console.log("id", id);
    const updateOptions = 
    fetch("http://localhost:3001/clientlist/" + id, {
        "method": "PATCH",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          number: 1,
          name: "Bob",
          hours: "45",
          status:  "In-Progress",
          phase: "Development",
          tasksCompleted: "Design",
          details: "Details",
          nextCall: "Fri, May 6th at 2PM EST",
          memo: "Waiting to show where I am current to proceed forward",
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render() {
    let setClients = this.state.setClients; 
   
    return(
     <div className="list">
      <div className="add-area">
       <h2>Client List</h2>
       <input type="submit" value="Add Project" />
      </div> 
      <div className="switch-area">
        <a className="view-area">
         <svg xmlns="http://www.w3.org/2000/svg" width="140px" height="22px" viewBox="36 0 14 14">
         <path fill="#231815" d="M.5 11a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
         <path fill="#f4f6f8" stroke="#231815"  d="M2 2h8v7h-8v-7z"/>
         <text x="16" y="10"><tspan>View projects</tspan></text>
         </svg>
        </a>
        <a className="sessions-area">
         <svg xmlns="http://www.w3.org/2000/svg" fill="#231815" width="160px" height="22px" viewBox="65 0 24 24">
         <path d="M12 22A10 10 0 0 1 12 2v2a8 8 0 0 0 0 16v2zm4-6v-3h-6v-2h6V8l5 4-5 4z"/>
         <text x="30" y="18">Log out all sessions</text>
         </svg>
        </a>
      </div>
      
        

        <Tabs className={"client-list"}>
          <TabList className={"choice-area"}>
            <Tab>All</Tab>
            <Tab>Active</Tab>
            <Tab>Archived</Tab>
          </TabList> 
          <Search />
          <div className="list-sort">
            <p>Showing {setClients.length} projects</p>
            <select name="sort">
              <option>Sort by Last login</option>
            </select>
          </div>
          <TabPanel>
          <div className='list-content'>
            <List list={setClients}  />
           </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <PreviosNext />
        </Tabs> 
     </div>
    )
  }
}
  

export default ClientList;
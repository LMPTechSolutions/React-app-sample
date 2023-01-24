import React from 'react';
import './AppStyles.css';
import './AppStyles-temp.css';


import {settings} from './constants';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from "react";

import { getCLients } from './components/Api';
import List from './components/List';
import Search from './components/Search';
import PreviosNext from './components/PreviousNext';

import { Link, Outlet, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


function App() {

  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    const doGetUsers = async () => {
      try {
        const result = await getCLients();
        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    };

    doGetUsers();
  }, []);


  // const handleEdit = async () => {
  //   const updateOptions = 
  //   fetch("http://localhost:3001/clientlist/1", {
  //       "method": "PATCH",
  //       "headers": {
  //         "content-type": "application/json",
  //         "accept": "application/json"
  //       },
  //       "body": JSON.stringify({
  //         name: 1,
  //         name: "Bob",
  //         hours: "45",
  //         status:  "In-Progress",
  //         phase: "Development",
  //         tasksCompleted: "Design",
  //         details: "Details",
  //         nextCall: "Fri, May 6th at 2PM EST",
  //         memo: "Waiting to show where I am current to proceed forward",
  //       })
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   };
  if (!users) {
    return null;
  }


  console.log("users", users);

  return (
    <div  className="App">
      <h1> Dashboard</h1>
      <div className="dashboard">
        <div className=''>
          <h3>PROJECTS</h3>
          <p>{users.length}</p>
        </div>
        <div className=''>
          <h3>ACTIVE</h3>
          <p>{getActiveProjects(users)}</p>
          
        </div>
        <div className=''>
          <h3>INACTIVE</h3>
          <p>{getInactiveProjects(users)}</p>
          
        </div>
      </div>
      <div className="project-list">
        <div className="export">
         <h2>Projects List</h2>
         <input type="button" value="Export" />
        </div>
        <Tabs className={"client-list"}>
          <TabList className={"choice-area"}>
            <Tab>All</Tab>
            <Tab>Active</Tab>
            <Tab>Archived</Tab>
          </TabList> 
          <Search />
          <div className="label-header">
            <span>Name</span><span>Status</span><span>Phase</span><span>Call</span>
          </div>
          <TabPanel>
           <div className='list-content'>
            <List list={users} limit={5} />
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
    </div>
  );    
}

export default App;

function getActiveProjects(array){
  let totalActive = 0;
  {array.map((project) => {
      if(project.active) {
        totalActive++;
      }
  })}
  return totalActive
}

function getInactiveProjects(array){
  let totalActive = 0;
  {array.map((project) => {
      if(! project.active) {
        totalActive++;
      }
  })}
  return totalActive
}
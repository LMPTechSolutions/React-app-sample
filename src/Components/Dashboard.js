import React from "react";
import Sidebar from './Sidebar';

import Menu from './Menu';
import Settings from './Settings';
import {settings} from '../constants';
import ClientForm from './ClientForm';
import ClientList from './ClientList';

import { Link, Outlet } from "react-router-dom";


import { getCLients } from './Api';

class Dashboard extends React.Component {
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

      // fetch("http://localhost:3001/clientlist")
      // .then(res => {
      //   return res.json();
      // })
      // .then(data => {
      //   console.log("dashboard",data);
      //   this.setState({
      //     setClients: data
      //   }); 

  }

  handleEdit = async (id) => {

      console.log("id", id);
      const updateOptions = 
      fetch("http://localhost:3001/ClientList/" + id, {
          "method": "PATCH",
          "headers": {
            "content-type": "application/json",
            "accept": "application/json"
          },
          "body": JSON.stringify({
            name: 1,
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
    let clientList = this.state.setClients;


    return (
      <div className="dashboard">
        
        
        <div className="main-area">
       
            {/* <Menu/>
            <h1> Dashboard</h1> */}
            {/* {clientList && <ClientList clientList={clientList} handleEdit={this.handleEdit} />} */}
            {/* <ClientForm formVal={settings.formValues}/>
            <Settings  /> */}
            <Outlet />
        </div>
      </div>
    )
  }
}
  

export default Dashboard;
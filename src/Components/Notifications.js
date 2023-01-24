import React from "react";

import { NavLink } from "react-router-dom";
import { getNotifications } from './Api';
import Accordion from "./Accordion";
import PreviosNext from './PreviousNext';


class Notifications extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        setNotifications:[]
          
      }
      this.handleClick = this.handleClick.bind(this);
      
  }

  componentDidMount(){ 
    const doNotificationsGet = async () => {
      try {
        const result = await getNotifications();
        // setUsers(result);
        this.setState({
          setNotifications: result
        }); 
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    doNotificationsGet();
  }

  handleClick = async (childData) => {
    const indexSample = 1;

    console.log("clicked Notifications", childData);
    // let notes = this.state.setNotifications
    // note[indexSample].checked = true;
    // const updateOptions = 
    // fetch("http://localhost:3001/notifications/" + childData, {
    //     "method": "PATCH",
    //     "headers": {
    //       "content-type": "application/json",
    //       "accept": "application/json"
    //     },
    //     "body": JSON.stringify({
    //       "id": childData,
    //       "name": "New feature introduced",
    //       "timestamp": "Sept 24, 2022 13:20:18",
    //       "description": "We are excite to share this new feature, rolled out Monday",
    //       "link": "#",
    //       "link_text": "Learn More",
    //       "checked": true
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }


  // handleCallback = (childData) =>{
  //     console.log("childData", childData)
  // }
  
  render() {
    let notifications = this.state.setNotifications;
    console.log("notifications", this.state.setNotifications)
    return(
      <div className="notifications">
        <h2>Notifications</h2>
        <div>
         <Accordion handleClick={this.handleClick} note={notifications} parentCallback = {this.handleCallback} />
        </div>
        <PreviosNext />
      </div>
    )
  }
}
  

export default Notifications;
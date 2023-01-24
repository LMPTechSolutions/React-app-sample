import React from "react";

class ClientForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      name:" ",
      hours:0,
      status: 'waiting',
      phase: 'one',
      tasksCompleted:" ",
      details:" ",
      nextCall:" ",
      memo:" ",
      pojectStatusList:[],
      projectStatusListAdmin:["waiting", "Ready", "In-Progress"],
      projectPhaseListAdmin:["One", "two"]
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangePhase = this.handleChangePhase.bind(this);
    this.handleChangeTasksCompleted = this.handleChangeTasksCompleted.bind(this);
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    this.handleChangeNextCall = this.handleChangeNextCall.bind(this);
    this.handleChangeMemo = this.handleChangeMemo.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handleChangeHours(event) {
    this.setState({hours: event.target.value});
  }

  handleChangeStatus(event) {
    this.setState({status: event.target.value});
  }

  handleChangePhase(event) {
    this.setState({phase: event.target.value});
  }
  handleChangeTasksCompleted(event) {
    this.setState({tasksCompleted: event.target.value});
  }
  handleChangeDetails(event) {
    this.setState({details: event.target.value});
  }
  handleChangeNextCall(event) {
    this.setState({nextCall: event.target.value});
  }
  handleChangeMemo(event) {
    this.setState({memo: event.target.value});
  }

  handleSubmit(e) {

    e.preventDefault();

    let pojectStatusList = this.state.pojectStatusList;

    let projectStatus = {
      name: this.state.name,
      hours: this.state.hours,
      status:  this.state.status,
      phase: this.state.phase,
      tasksCompleted: this.state.tasksCompleted,
      details: this.state.details,
      nextCall: this.state.nextCall,
      memo: this.state.memo,
    }

    pojectStatusList.push(projectStatus);
    this.setState({pojectStatusList: pojectStatusList});

    fetch("http://localhost:3001/clientlist", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        name: this.state.name,
        hours: this.state.hours,
        status:  this.state.status,
        phase: this.state.phase,
        tasksCompleted: this.state.tasksCompleted,
        details: this.state.details,
        nextCall: this.state.nextCall,
        memo: this.state.memo,
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });

  }


  render() {
    
    let name = this.state.name;
    let hours = this.state.hours;
    let status = this.state.status;
    let phase = this.state.phase;
    let tasksCompleted = this.state.tasksCompleted;
    let details = this.state.details;
    let nextCall = this.state.nextCall;
    let memo = this.state.memo;
    let pojectStatusList = this.state.pojectStatusList;

    let formVal = this.props.formVal;
    let projectStatusListAdmin = this.state.projectPhaseListAdmin;
    let projectPhaseListAdmin = this.state.projectStatusListAdmin;


    return (
      <div className="client-form">
        <a href="/" className="Navigation">
        <svg viewBox="0 0 60 20">
          <path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z">
          </path>
          <text x="20" y="15">Back</text>
        </svg> 
        </a>
        <h2> The Client Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-area">
            <h3>Project - </h3>
            <div  className="project">
              <label className="grid grid-col-20-60"><p>Name:</p>
                <input type="text" name="name" value={name} onChange={this.handleChangeName}  placeholder="name"/>
              </label>
              <label className="grid grid-col-20-60"><p>Hours:</p>
                <input type="text" name="hours" placeholder="hours"  value={hours} onChange={this.handleChangeHours} />
              </label>
            </div>
          </div> 
          <div className="form-area">
            <h3>Execution - </h3>
            <div className="execution">
              {/* https://reactjs.org/docs/forms.html - Section: Handling Multiple Inputs */}
              <label className="grid grid-col-20-60"> <p>Status:</p>
                <select value={status} name="status" onChange={this.handleChangeStatus}>
                  {projectStatusListAdmin.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                  ))}
                </select>
              </label> 

              <label className="grid grid-col-20-60" > <p>Phase:</p>
                <select value={phase} name="phase" onChange={this.handleChangePhase}>
             
                  {projectPhaseListAdmin.map((phase, index) => (
                      <option key={index} value={phase}>
                        {phase}
                      </option>
                  ))}
                </select>
              </label> 
            </div>
          </div>
          <div className="form-area"> 
            <h3>Description - </h3>
            <div className="description">
             <label className="grid grid-col-20-60"><p>Target:</p><textarea value={tasksCompleted} onChange={this.handleChangeTasksCompleted} /></label> 
             <label className="grid grid-col-20-60"><p>Details:</p><textarea value={details} onChange={this.handleChangeDetails} /></label>
            </div>
          </div>
          <div className="form-area"> 
            <h3>Memo - </h3>
            <div className="memo"> 
             <label className="grid grid-col-20-60"><p>Next call:</p><textarea value={nextCall} onChange={this.handleChangeNextCall} /> </label>
             <label className="grid grid-col-20-60"><p>Message:</p><textarea value={memo} onChange={this.handleChangeMemo} /> </label>
            </div>
          </div>
          <div className="submit-area">
          <input type="button" value="Cancel" />
          <input type="submit" value="Save" />
          </div>
        </form>
        <div className="dev-block">
          <h6>Form Selections </h6>
          <p> Current Hours: {hours} </p>
          <p> Current Status: {phase} </p>

          <p> Current Phase: <br/> {tasksCompleted} </p>
          <p> Current Phase:<br/>  {details} </p>
          <p> Current Phase:<br/>  {nextCall} </p>

          <p> Message: <br/> {memo} </p>
          <p> Poject Status List:  </p>
        
          <ul>
            {/* {pojectStatusList.map((status, index) => (
              <li key={index}>
                <div>{status.name}</div>
                <div>{status.status}</div>
                <div>{status.phase}</div>
                <div>{status.tasksCompleted}</div>
              </li>
            ))} */}
          </ul>
       
        </div>
      </div>
    )
  }
}
  

export default ClientForm;
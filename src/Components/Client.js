// import { useParams } from "react-router-dom";
// import { getProject } from './Api';


// export default async function Client() {
  
//   let params = useParams();
//   const {id} = useParams();
//   const project = await getProject(parseInt(params.id, 10));
  
//   console.log("project front", project);
//   return <h2>Project: {params.id} - check</h2>;
// }




import React from "react";
import { useParams, useLocation } from "react-router-dom";
import withRouter from './withRouter';


import { getProject } from './Api';


class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project:"",
      data: []
    }
  }
  componentDidMount(){
    console.log('Props: componentDidMount', this.props.params.id)
    
    // const { id } = this.props.match.params;
    // const windowUrl = window.location.search;
    // const params = new URLSearchParams(windowUrl);
    // const loc = this.props.location.search;
    

    // console.log("windowUrl", windowUrl);
    // console.log("param", params);
    // console.log("loc", loc);
    // let params = useParams()
    //  console.log("id", this.props.params.id);
    // let { id } = this.props.params;
    // console.log("param", this.props);


    
    // fetch(`http://localhost:3001/clientlist`)
    //   .then(res => res.json())
    //   .then(
    //     json => this.setState({ data: json })
    //   );

    // const getProject = async () => {
    //   try {
    //     const result = await getProject(1);
    //     console.log("result  ", result);

    //     // setUsers(result);
    //     this.setState({
    //       project: result
    //     }); 
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getProject();
    this.renderPosts(this.props.params.id);
    console.log("componentDidMount", this.state.project.id);
    console.log("componentDid Props", this.props);

  }
  // https://reactrouter.com/en/main/start/tutorial
  // https://stackoverflow.com/questions/47658765/objects-are-not-valid-as-a-react-child-found-object-promise
  renderPosts = async(id) => {
    console.log("renderPosts", parseInt(id) );
    try {
          const result = await getProject(parseInt(id));
          console.log("result front ", result);
  
          // setUsers(result);
          this.setState({
            project: result
          }); 
        } catch (error) {
          console.log(error);
        }
  }
  
   render() {
    console.log( this.state.project.id);
    let project = this.state.project;
   return (
      <div className="client">
        <h1>{project.name}  </h1>
        <div className="client-project">
          <div className="status-area">
          <h2>{project.projectName ? project.projectName : "untitled"} Status </h2>
          <p>{project.status}  </p>
          <p>{project.memo}  </p>
          </div>
          <div className="tasks-area">
          <h2> Tasks Completed</h2>
       
          <div> 
            Store Setup
          </div>
          <div> 
            Store Pages create and template selected
          </div>

          </div>
          <div className="tasks-area">
          <h2> Upcoming Tasks</h2>
       
          <div> 
            Select Sections
          </div>
          <div> 
            Select colors, Typograph
          </div>

          </div>
          <div className="dates-area">
          <h2> Important Dates</h2>
          <p> 
            OnBoarding Review: 12/1/22
          </p>
          <p> 
            First Draft Review: 12/15/22
          </p>
          <p> 
            Design Review: 12/25/22
          </p>
          </div>
        </div>
      </div>
    )
  }
}
  
export default withRouter(Client);

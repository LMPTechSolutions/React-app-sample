import React from 'react';
// Get Project
export const getCLients = async () => {
  const res = await fetch("http://localhost:3001/clientlist")
  const json = await res.json()
  return json
}
 
// export const getCLients =
//     fetch("http://localhost:3001/clientlist")
//       .then(res => {
//         console.log("res", res);
//         return res.json();
//       })
    // if (!users) {
    //   return setTimeout(
    //     () => reject(new Error('Users not found')),
    //     250
    //   );
    // }

    // setTimeout(() => resolve(Object.values(users)), 250);
  

// // Admin
//     getUsers
//     getUser 
//     createUser
//     deleteUser
// // Projects
//     createProject
//     updateProject 
//     deleteProject
//     getProjects
//     getProject
//     addUserToProject
//     deleteUserFromProject
// // Users
//     updateUser
//     deleteUser
//     Update Company Info
//     Update user Info
//     View Projects
//     Create / Update / Delete Projects
// // Tasks
//     getTasks
//     getTask
//     createTask
//     updateTask
//     deleteTask
// // Companies
//     createCompany
//     updateCompany
//     deleteCompany
//     addUserToCompany
//     deleteUserFromCompany

// Get Project
export const getProject = async (number) => {
  console.log("number", typeof number );



  const res = await fetch("http://localhost:3001/clientlist")
  const json =  await res.json()
  console.log("json back", json );


  //console.log("number", typeof number );


  const project =   json.find((project) => project.id === number);
  console.log("project", project );
  // const json = await project.json();
  return project

}


// Fetch Budgets
export const getNotifications = async () => {
  const res = await fetch('http://localhost:3001/notifications')
  const data = await res.json()

  return data
}
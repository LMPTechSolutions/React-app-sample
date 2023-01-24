import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import ClientList from "./components/ClientList";
import Client from "./components/Client";
import Dashboard from './components/Dashboard';
import ClientForm from './components/ClientForm';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Support from './components/Support';
import Team from './components/Team';
import PreviosNext from './components/PreviousNext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Header /> 
    <div className="window">  
      <Sidebar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/clienform" element={<ClientForm />} />
        <Route path="/dashboard/clientlist" element={<ClientList />} />
        <Route path="/dashboard/clientlist/:id" element={<Client />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/support" element={<Support />} />
        <Route path="/dashboard/team" element={<Team />} />

        {/* <Route path="/dashboard/clientlist/:id/edit" element={ <ClientEdit />} /> */}

        

        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
    
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

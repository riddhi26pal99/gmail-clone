import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/SideBar';
import Mail from './Components/Email/Mail';
import EmailList from './Components/Email/EmailList/EmailList';
import { Route,
        BrowserRouter as Router,
        Switch,
        Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="app_body">
            <SideBar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path = "/">
                <EmailList />
              </Route>
            </Switch>

          </div>
      </div>
    </Router>
  );
}

export default App;

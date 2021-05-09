import React, { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessagesIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';


import Login from './Login';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/SideBar';
import Mail from './Components/Email/Mail';
import EmailList from './Components/Email/EmailList/EmailList';
import SendMail from './Components/SendMail/SendMail';
import { Route,
        BrowserRouter as Router,
        Switch,
        Link } from "react-router-dom";
import { auth } from './firebase.config';

function App() {
  const user = useSelector(selectUser);
  const sendMessagesIsOpen = useSelector(selectSendMessagesIsOpen);

  const dispatch = useDispatch();

  useEffect( () => {
    auth.onAuthStateChanged( user => {
      if(user) {
        //the user is logged in
        dispatch(login({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email,
        }))
      }

      else {
        
      }
    })
  },[])

  return (
    <Router>
      {!user?( 
        <Login /> )
        :
        (

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
          
          {sendMessagesIsOpen && <SendMail />}
          </div>
        )
      }
    </Router>

  );
}

export default App;

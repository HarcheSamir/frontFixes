import React from 'react';
import Sidebar from './Components/Sidebar';
import Modifier_Info from './Components/Modifier_Info';
import Welcome from './Components/Welcome';

import Contact_admin from './Components/Contact_admin';
import Afficher_employees from './Components/Afficher_employees';
import HomeHome from './Components/HomeHome';
import RegistrationRegistration from './Components/RegistrationRegistration';
import {Link} from 'react-router-dom';


const routes = [
  {
    path: "/Registration",
    element: (
      <div className="App">
      <RegistrationRegistration/>
      </div>
    )
  },
 
  {
    path: "/Modifier_Info",
    element: (
      <div className="App">
        <div className="container">
          <Sidebar/> 
          <div className="margin">
            <Modifier_Info/>
          </div>
        </div>
      </div>
    )
  },

  {
    path: "/Contact_admin",
    element: (
      <div className="App">
        <Contact_admin/>
      </div>
    )
  },

  {
    path: "/Employees",
    element: (
          <div >
          <Afficher_employees/>
          </div>
    )
  },

  {
    path: "/Login",
    
    element: (
        <div className='App3'>
        <Welcome />
       </div>
    )
  },

  {
    path: "/Home",
    element: (
        <div className='App2'>
<HomeHome/>
        </div>
    )
  }
];

export default routes;

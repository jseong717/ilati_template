import React, { Component } from 'react';
import './Dashboardpage.css'

import HeadForm from '../component/HeadForm';
import LeftMenuForm from '../component/LeftMenuForm';

class Dashboardpage extends Component
{
  render()
  {
    console.log("InDashboardpages");
    return (
        <body>
            <div className="Dashboardpages__Panel">
                <LeftMenuForm/>
                <HeadForm NickName="Ilati"/>
            </div>
        </body>
    );
  }
}

export default Dashboardpage;
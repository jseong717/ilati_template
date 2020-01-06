import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Loginpage, Dashboardpage } from 'pages'

class App extends Component
{
  render()
  {
    console.log("InApp");
    return (
        <div>
          {/* <Route exact path="/" component={Loginpage}/> */}
          <Route exact path="/" component={ Dashboardpage }/>
        </div>
    );
  }
}

export default App;
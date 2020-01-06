import React, { Component } from 'react';
import './Loginpage.css'

class Loginpage extends Component
{
  render()
  {
    console.log("InLoginpages");
    return (
        <body>
            <div className = "LoginPage__Panel">
                <div className="LoginBox__Panel">
                  <div className="LoginTitle__Panel">
                      <text className="LoginTitle__Text"> Log In </text>
                  </div>
                  <div className="LoginID__Panel">
                      <text className="LoginID__Text"> ID </text>
                      <input id="LoginID__Input" className="LoginID__Input" placeholder="Ilati"/>
                  </div>
                  <div className="LoginPS__Panel">
                      <text className="LoginPS__Text"> Password </text>
                      <input id="LoginPS__Input" className="LoginPS__Input" placeholder="********"/>
                  </div>
                  <div className="LoginBtn__Panel">
                      <button className="LoginSignUp__Button">Sign Up</button>
                      <button className="LoginLogIn__Button">Log In</button>
                  </div>
                </div>
            </div>
        </body>
    );
  }
}

export default Loginpage;
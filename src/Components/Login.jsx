import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { useState } from 'react';


function Login () {
  
  const  history = useHistory();
  const [userName , setUserName] = useState("admin@gmail.com");
  const [password , setPassword] = useState("admin");
  const [user , setUser] = useState("");
  const [pass , setPass] = useState("");
  const  onSubmitHandler=()=>{
        if(user ===userName && pass===password){
            history.push("/admin");
           }else{
            alert("usernme or password is incorrect")
           }
           
          
    }

  
    // let value=(this.props.pass) ? undefined : "";
    return (
      <div>
        <div className="container">
          <div id="main-outer-div">
            <div id="logo-div">
               
              <img id="logo-img" src="https://www.orangehrm.com/_resources/themes/orangehrm/dist/images/OrangeHRM_Logo.svg" alt="" />
            </div>
            <div id="title-div">
               
              <h4 className="title">Sign in</h4>
            </div>

            <div id="outer-login-form-div">
              <form action="" method="" onSubmit={onSubmitHandler}>
                {/* <div className="form-group"> */}
                  <input className="login-form-input"
                    type="text"
                    // className="form-control"
                    placeholder="Email"
                    required="required"
                    name="Username" value={user} onChange={(e)=>setUser(e.target.value)}
                  />
                {/* </div> */}
                {/* <div className="form-group"> */}
                  <input className="login-form-input"
                    type="password"
                    // className="form-control"
                    placeholder="Password"
                    required="required"
                    value={pass} onChange={(e)=>setPass(e.target.value)}
                  />
                {/* </div> */}
                {/* <div className="form-group"> */}
                  <input className="login-form-input"
                    type="submit"
                    // className="btn btn-primary btn-block btn-lg btn-mystyle"
                    value="Sign in"
                    id="submitBtn"
                  />
                {/* </div> */}
                
              </form>
            </div>

            <div className="loading">
             
            </div>
          </div>
        </div>
      </div>
    );
  }



export default Login;

import React from 'react';
import './App.css';
import Login from './Components/Login';
import DashboardAdmin from './Components/AdminDashBoard';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  DefaultRoute,
  Switch,
  useHistory
} from "react-router-dom";

function App() {
  const history = useHistory();
 const handleLogout = event => {
 history.push("/")
  
  };

const pass = "admin";

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route
            // exact
            path="/admin"
            render={props =>
              pass == "admin" ? (
                <DashboardAdmin
                  onLogout={handleLogout}
                />
              ) : (
                  <Redirect to="/login" />
                )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

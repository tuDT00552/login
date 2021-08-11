import './App.css';
import React, { useState } from 'react';
import LoginForm from './component/LoginForm';
import axios from "axios";
import Dashboard from './dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  const adminUser = {
    email: "admin",
    password: "admin"
  }

  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");

  const Login = user => {
    axios.post('http://localhost:2000/api/login', {
      email: user.email,
      password: user.password
    }).then(response => {
      if (response.data.code == 1) {
        setUser({
          email: response.data.data.email,
          password: response.data.data.password,
          name: response.data.data.name
        })
      } else {
        setError(response.data.message)
      }
    })
  }

  const Logout = () => {
    setUser({
      email: "",
      password: "",
      name: ""
    })
  }

  return (
    <Router>
      <div className="App">
        {(user.email != "") ? (
          <div className="welcome">
            {/* <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch> */}
            <h2>Welcome, <span>{user.name}</span></h2>
            <button className="btn btn-primary" onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </Router>
  );
}

export default App;

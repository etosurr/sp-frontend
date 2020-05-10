import React, {useState} from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from './pages/Admin';
import { AuthContext } from "./context/auth";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    };
    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
              <div>
                  <ul>
                      <li>
                          <Link to="/">Home Page</Link>
                      </li>
                      <li>
                          <Link to="/admin">Admin Page</Link>
                      </li>
                      <li>
                          <Link to="/login">Sign In</Link>
                      </li>
                      <li>
                          <Link to="/register">Sign Up</Link>
                      </li>
                  </ul>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <PrivateRoute path="/admin" component={Admin} />
              </div>
          </Router>
        </AuthContext.Provider>
    );
}

export default App;

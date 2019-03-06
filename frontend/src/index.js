//npm packages
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import withSession from "./components/withSession";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//styles
//import './index.css';

import "./assets/scss/main.scss";
// custom components
import App from "./components/App";
import Styleguide from "./components/Styleguide";
// import Signin from './components/Signin';
// import Signup from './components/Signup';
import SigninAuth from "./components/auth/SigninAuth";
import SignupAuth from "./components/auth/SignupAuth";
import Footer from "./components/Footer";
import Navbar from "./components/shared/Navbar";
import Search from "./components/exercise/Search";
import About from "./components/About";
import Home from "./components/Home";
import Account from "./components/Account";
import Likes from "./components/Likes";
import Addvideo from "./components/Addvideo";

const client = new ApolloClient({
  uri: "http://localhost:4444/graphql",

  fetchOptions: {
    credentials: "include"
  },

  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },

  onError: ({ networkError }) => {
    if (networkError) {
      console.log("Network Error", networkError);
    }
  }
});

const Root = ({ refetch, session }) => (
  <Router>
    <div id="wrapper">
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/search" component={Search} />
        <Route path="/home" component={Home} />
        <Route path="/addvideo" component={Addvideo} />
        <Route path="/likes" component={Likes} />
        <Route path="/account" component={Account} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/signin" render={() => <SigninAuth refetch={refetch} />} />
        <Route path="/signup" render={() => <SignupAuth refetch={refetch} />} />
        {/* <Route path="/signin" component={SigninAuth} /> */}
        {/* <Route path="/signup" component={SignupAuth} /> */}
        <Route path="/styleguide" component={Styleguide} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

const RootWithSession = withSession(Root);
ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);

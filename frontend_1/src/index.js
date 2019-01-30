//npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//styles
//import './index.css';

import './assets/scss/main.scss';
// custom components
import App from './components/App';
import Styleguide from './components/Styleguide';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Navbar from './components/shared/Navbar';
import Search from './components/exercise/Search';
import About from './components/About';
import Home from './components/Home';
import Account from './components/Account';
import Likes from './components/Likes';
import Addvideo from './components/Addvideo';

const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
});

const Root = () => (
  <Router>
    <div id="wrapper">
      <Navbar />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Home" component={Home} />
        <Route path="/Addvideo" component={Addvideo} />
        <Route path="/Likes" component={Likes} />
        <Route path="/account" component={Account} />
        <Route path="/serach" component={Search} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/Styleguide" component={Styleguide} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);

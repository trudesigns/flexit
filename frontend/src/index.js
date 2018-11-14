//npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//styles
import './index.css';
// custom components
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

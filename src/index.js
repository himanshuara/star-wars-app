/**
 * Importing required modules
 */

// Importing third party libraries

import React  from 'react'; 
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'; 


import configureStore from './store';
import Routes from './components/Router';
/**
 * Creating a store and passing it to provider
 */

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>
,document.getElementById('container'))


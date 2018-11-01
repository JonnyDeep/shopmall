import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from '../src/web/login.js';
import First from '../src/web/first.js';
import App from './App';
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
		<Router>
			 <div>
			 	 <Route path="/App" component={App}/>
			 	 <Route path="/login" component={Login}/>
				 <Route path="/first" component={First}/>
			 </div>
			
		</Router>
    , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

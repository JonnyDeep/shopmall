import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from '../src/login/login.js';
import QRCodeLogin from '../src/web/QRCode.js';
import ShortCut from '../src/shotcut/index.js';
import GoodsTable from '../src/goods/index.js';
import GoodsDetail from '../src/gooddetail/index.js'
import BuyPage from '../src/buy/index.js'
import BuySuc from '../src/buyResult/index.js'
import App from './App';
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
		<Router>
			 <div>
				 <Route path="/ShortCut" component={ShortCut}/>
			 	 <Route path="/App" component={App}/>
			 	 <Route path="/login" component={Login}/>
				 <Route path="/QRCodeLogin" component={QRCodeLogin}/>
				 <Route path="/GoodsTable" component={GoodsTable}/>
				 <Route path="/GoodsDetail" component={GoodsDetail}/>
				 <Route path="/Buy" component={BuyPage}/>
				 <Route path="/BuySuc" component={BuySuc}/>
			 </div>
			
		</Router>
    , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShortCut from '../shotcut/index.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
import '../const/const.js';
require('./index.css');

class DiscussionElement extends Component{
    constructor(props,context){
        super(props,context);
        
    }

    render(){
        return(
        <div>
           <div>
               <div className="leftUser">
                    <div className='user'>
                        <img width={160} height={280} alt="300x400" src={require('../images/head.jpg')}/>j*****s
                    </div>
                </div>
               <div className="contentWrap">
                    <div className="start">
                        <Rate disabled defaultValue={4.5} />
                    </div>
                    <div className="DiscussionText">{this.props.text}</div>
                    <div className="DiscussionImage"></div>
               </div>
           </div>
        </div>
        );
    }
}

export default DiscussionElement;
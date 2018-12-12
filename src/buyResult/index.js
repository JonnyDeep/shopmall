import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShortCut from '../shotcut/index.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import {Navbar,Jumbotron, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
import '../const/const.js';
import DiscussionElement from '../discussion/index.js';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import { Cascader,Badge,Tag,Steps,Button,message, AutoComplete,Icon} from 'antd';

import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { stat } from 'fs';
import { globalAgent } from 'http';
import Item from 'antd/lib/list/Item';

require('./index.css');


const Step = Steps.Step;

const steps =[{
        title:"个人信息",
        content:<div>
            <div></div>
        </div>,
    },{
        title:"确认支付",
        content:"Second-content",
    },{
        title:"成功",
        content:<div>
            <div>
                <div>
                    <img width={100} height={100} src={require('../images/739129.png')}></img>
                </div>
                <div>
                    恭喜！<br></br>
                    你的订单成功被处理！<br></br>
                    订单号:12312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共计:￥180
                </div>
            </div>
        </div>,
    }]

class BuySuc extends Component
{
    constructor(props,context)
    {
        super(props,context);
        this.state={
            current:0,
        };
    }

    next(){
        const current = this.state.current+1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){
        const {current} = this.state;
        return(
            <div>
                <ShortCut></ShortCut>

                <div className="main">
                    <Steps current={current}>
                        {steps.map(item=><Step key={item.title} title={item.title}/>)}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {
                            current < steps.length-1
                            &&<Button type='primary' onClick={()=>this.next()}>Next</Button>
                        }
                        {
                            current === steps.length-1
                            &&<Button type='primary' onClick={()=>message.success('购买成功')}>Done</Button>
                        }
                        {
                            current >0
                            &&<Button style={{marginLeft:8}} onClick={()=>this.prev()}>Previous</Button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BuySuc;
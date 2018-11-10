import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShortCut from '../shotcut/index.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
import '../const/const.js';
require('./index.css');

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='head'>
                <div className='logo'>
                    <img width={150} height={98} src={require('../images/logo.jpg')}></img>
                </div>
                <div className='searchBtn'>
                    <div>
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" inputRef={ref=>{this.searchCondition=ref;}}/>
                                <InputGroup.Button>
                                <Button bsStyle='danger' onClick={()=>this.btnSearch()}><Glyphicon glyph="search" className='iconText' />搜索</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
}

class BuyItemTable extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                 <div className='allcheck'>
                        <input type='checkbox'/>
                    </div>
                   
                    <div>
                        <a>店名</a>
                    </div>
                
                    <hr className='myhr'></hr>
                <div className='goods'>
                   
                    <div>
                        <div className='cell'>
                            <div className='singleCheck'>
                                <input type='checkbox'></input>
                            </div>
                        </div>
                        <div className='cell'>
                           <div className='g-item'>
                           <div className='pp-img'>
                                <img></img>
                            </div>
                            <div className='p-goodsname'>
                                商品名
                            </div>
                           </div>
                        </div>
                        <div className='cell'>
                            <div className='p-props'>
                                <p>颜色</p>
                                <p>尺码</p>
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-price'>
                                11
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-quantity'>
                                <div className='p-sub'>-</div>
                                <input type='text' className='tx-num'></input>
                                <div className='p-add'>+</div>
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-sum'>
                                <strong>￥1000.00</strong>
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-action'>
                                删除
                            </div>
                        </div>
                    </div>
                </div>

                <div className='buybar'>
                    <div className='checkall'>
                        <input type='checkbox'/>
                    </div>
                   
                    <div>
                        <a>店名</a>
                    </div>
                </div>
            </div>
        );
    }
}
class ItemsList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <div className='title'>
                        <strong>
                            全部商品
                        </strong>
                    </div>

                    <div className='buyhead'>
                        <div className='item check-box'>
                          <input type='checkbox'></input>
                          <div className='span'>全选</div>
                        </div>
                        <div className='item t-goods'>
                            商品
                        </div>
                        <div className='item t-props'></div>
                        <div className='item t-price'>单价</div>
                        <div className='item t-quantity'>数量</div>
                        <div className='item t-sum'>小计</div>
                        <div className='item t-action'>操作</div>
                    </div>

                    <BuyItemTable></BuyItemTable>
                </div>
            </div>
        );
    }
}
class BuyPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ShortCut></ShortCut>
                
                <div className='bbody'>
                    <Header></Header>
                    <ItemsList></ItemsList>
                   
                </div>
            </div>
        );
    }
}

export default BuyPage;
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

                <div className='shoppingCar'>
                    <div className='shopcarBtn'>
                        <span className='spanCss'>
                            <a>
                                购物车 <Glyphicon glyph='shopping-cart'></Glyphicon>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class ItemDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            num:1,
            color:'black',
            size:'X'
        }

    }

    addBtn(){
        this.setState({num:this.state.num+1})
    }

    subBtn(){
        if(this.state.num==1){
            return
        }
        this.setState({num:this.state.num-1})
    
    }

    notify = (msg,flag) => {
       if(flag=="success"){
            toast(msg,{
                autoClose:1500
            });
       }else{

        toast.warn(msg, {
            position: toast.POSITION.TOP_LEFT,
            autoClose:1500
          });
    
       }
        
    }

    addShopCar(){
        if(this.state.size==''){
            this.notify("选购型号","error");
        }else if(this.state.color==''){
            this.notify("选购颜色","error");
        }else{
            global.goodsItem.goodsNum=this.state.num;
            global.goodsItem.goodsPrice = 99.00;
            global.goodsItem.goodsId='1'
            global.goodsItem.sellerId='1'
            global.shopingcar.goodsItem[0]=global.goodsItem;
            
            console.log(global.shopingcar.goodsItem[0] );
            this.notify("物品已添加到购物车，可以继续购买其他物品!","success");
        }
       
        
        
    }

    render(){
        return(
            <div className='detail'>
                <div className='leftwrap'>
                    <div className='spec-img'>
                        <img></img>
                    </div>
                    <div className='spec-list'>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className='middlewrap'>
                    <div className='sku-name'>
                        <strong>
                        【买一送一，两件装】长袖t恤男士韩版青年春秋潮上衣打底衫外套新款圆领卫衣男秋衣服 W2783灰色+W2782白色 XL
                        </strong>
                    </div>
                    <div className='summary'>
                        
                    </div>
                    <div className='summary-direction'>
                        配送至
                    </div>
                    <hr></hr>
                    <div className='summary-color'>
                        <div>
                            选择颜色
                        </div>
                        <div>
                            <ul>
                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='summary-size'>
                        <div>
                            选择尺码
                        </div>
                        <div>
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='shose-num'>
                        <div className='by-text-wrap'>
                            <input type='text' className='by-text' value={this.state.num}></input>
                        </div>
                        <div >
                            <div className='buy-add' onClick={()=>{this.addBtn()}}>
                                +
                            </div>
                            <div className='buy-sub'  onClick={()=>{this.subBtn()}}>
                                -
                            </div>
                        </div>
                        
                    </div>
                    <Button bsStyle='danger' className='buy-btn' onClick={()=>{this.addShopCar()}}>加入购物车</Button>
                    <ToastContainer />
                </div>
                <div className='rightwrap'></div>
            </div>
        );
    }
}

class GoodsTab extends Component{
    constructor(props){
        super(props);
        this.state = { tabIndex: 0 };
    }

    render(){
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} className='goodsDiscussion'>
              <div className='tabhead'>
              <TabList className='mytablist'>
                <Tab >商品介绍</Tab>
                <Tab >规格与包装</Tab>
                <Tab >商品评价</Tab>
              </TabList>
              </div>
              <TabPanel>ni hao </TabPanel>
              <TabPanel>ni hao a </TabPanel>
              <TabPanel>ni hao a </TabPanel>
            </Tabs>
          );
    }
}
class GoodsDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <ShortCut></ShortCut>
           
            <div className='body'>
                <Header></Header>
                <hr className='hr'></hr>
                <ItemDetail></ItemDetail>
                <div className='clear'></div>
                <GoodsTab></GoodsTab>
            </div>
        </div>
        );
    }
}

export default GoodsDetail;
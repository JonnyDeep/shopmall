import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShortCut from '../shotcut/index.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
import '../const/const.js';
import DiscussionElement from '../discussion/index.js';

import { Cascader,Badge,Tag,Radio} from 'antd';

import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { stat } from 'fs';
import { globalAgent } from 'http';

require('./index.css');

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];






// ReactDOM.render(
 
//   mountNode
// );

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = { checked: true };

  handleChange = (checked) => {
    this.setState({ checked });
  }

  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}



class Header extends Component{

    static contextTypes={
        router:PropTypes.object
    }

    constructor(props,context){
        super(props,context);
    }

    viewShopCar(){
        console.log(global.goodsItem.goodsPrice)
        console.log(global.shopingcar.goodsItem[0] );
        
        this.context.router.history.push({pathname:"/Buy/",state:{goodsItem:global.shopingcar.goodsItem}}); 
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
                        <span className='spanCss'  onClick={()=>this.viewShopCar()}>
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
            address:"",
            data:{
                price:"",
                size:[],
                color:[]
            }
        }

    }

    componentDidMount(){
        var params = this.props.goodsId;
        console.log("---> did mount params:"+params);
        fetch('http://127.0.0.1:8081/goods/queryGoodsByCondition?searchCondition='+params,{
            method:'GET',
            headers:{
                // "content-Type": "text/html;charset=UTF-8",
                "content-Type":"application/json;charset=UTF-8",
            },
            credentials:'include',
            mode:'cors',
            cache:'default'
        }).then((response)=>{
            // console.log(response);
            // console.log(response.ok);
            if(response.ok){
                return response.json();
                // console.log(response.text());
            }else{
                console.log(response.status);
            }
        }).then(data=>{
            
            this.setState({data:data.data});
            // console.log(JSON.stringify(this.state.data.rows))
            // console.log(this.state.data.rows.length)
            // const ullist = this.state.data.rows.map((row)=>{
              
            // });
        }).catch((err)=>{
            console.log(err);
        })
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

    onChange(value) {
        this.setState({
            address:value[0]+"/"+value[1]+"/"+value[2]
        },()=>{
            console.log("address:"+this.state.address);
        });
       
    }

    _Change (e){
        if(e.target.value==='X'||e.target.value==='XL')
        {
            global.goodsItem.size=e.target.value;
            // console.log(global.goodsItem.size);
        }else{
            global.goodsItem.color=e.target.value;
            // console.log(global.goodsItem.color);
        }
      
        console.log(e.target.value)
    }
    addShopCar(){
        if(global.goodsItem.size===''){
            this.notify("选购型号","error");
        }else if(global.goodsItem.color===''){
            this.notify("选购颜色","error");
        }else if(this.state.address===''){
            this.notify("填写地址","error");
        }else{
            global.goodsItem.goodsNum=this.state.num;
            global.goodsItem.goodsPrice = this.state.data.price;
            global.goodsItem.goodsId=this.state.data.goodsId;
            global.goodsItem.sellerId=this.state.data.sellerId;
            // global.goodsItem.size='X';
            // global.goodsItem.color='黑色';
            global.goodsItem.goodsName=this.state.data.goodsName;
            global.goodsItem.goodsImage = this.state.data.zoomUrl;
            global.shopingcar.goodsItem[0]=global.goodsItem;
            
            this.notify("物品已添加到购物车，可以继续购买其他物品!","success");
        }
       
        
        
    }

    render(){
        var size = []
        
        size=this.state.data.size;
        console.log("data:"+JSON.stringify(this.state.data));
        var color = this.state.data.color;
        var price = this.state.data.price;
        const sizeArray = new Array();
        const colorArray = new Array();
     
        // if(price.length>0){
           
        //     for(var i=0;i<color.length;i++)
        //     {
        //         colorArray[i] = <MyTag key={i}>{color[i]}</MyTag>
        
        //     }

        //     for(var i=0;i<size.length;i++)
        //     {
        //         sizeArray[i] = <MyTag key={i}>{size[i]}</MyTag>
        //     }
        // }
        return(
            <div className='detail'>
                <div className='leftwrap'>
                    <div className='spec-img'>
                        
                        <img src={'http://localhost:8081/file/'+this.state.data.url}>
                        </img>
               
                    </div>
                    <div className='spec-list'>
                        {/* <ul>
                            <li> */}
                                <img src={'http://localhost:8081/file/'+this.state.data.zoomUrl}></img>
                            {/* </li>
                        </ul> */}
                    </div>
                </div>
                <div className='middlewrap'>
                    <div className='sku-name'>
                        <strong>
                        【买一送一，两件装】{this.state.data.goodsName} W2783灰色+W2782白色 XL
                        </strong>
                    </div>
                    <div className='summary'>
                        
                    </div>
                    <div className='summary-direction'>
                        配送至
                        <Cascader options={options} onChange={(e)=>this.onChange(e)} placeholder="Please select" />
                    </div>
                    <hr></hr>
                    <div className='summary-color'>
                        <div>
                            <span>选择尺码</span>
                            <div >
                                
                                <RadioGroup onChange={(e)=>this._Change(e)}>
                                   {
                                       size.map((item,index)=>{
                                        //    console.log({item})
                                           return (
                                               <RadioButton key={item} value={item} style={{marginRight:16,borderRadius:'4px'}} >{item}</RadioButton>
                                           )
                                       })
                                   }
                                </RadioGroup>
                                
                                
                                <div className='clear'></div>
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className='summary-size'>
                        <div>
                            <span>选择颜色</span>
                            <div >
                               <RadioGroup onChange={(e)=>this._Change(e)}>
                                   {
                                       color.map((item,index)=>{
                                        //    console.log({item})
                                           return (
                                               <RadioButton key={item} value={item} style={{marginRight:16,borderRadius:'4px'}}>{item}</RadioButton>
                                           )
                                       })
                                   }
                                </RadioGroup>
                               

                                
                                <div className='clear'></div>
                            </div>
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
        this.state = { 
            tabIndex: 0,
            data:new Array()
        };
    }

    componentDidMount(){
        var params =this.props.goodsId; 
        console.log("---> did mount params:"+params);
        fetch('http://127.0.0.1:8081/discussions/queryDiscussionByGoodsId?goodsId='+params,{
            method:'GET',
            headers:{
                // "content-Type": "text/html;charset=UTF-8",
                "content-Type":"application/json;charset=UTF-8",
            },
            credentials:'include',
            mode:'cors',
            cache:'default'
        }).then((response)=>{
            // console.log(response);
            // console.log(response.ok);
            if(response.ok){
                return response.json();
                // console.log(response.text());
            }else{
                console.log(response.status);
            }
        }).then(data=>{
            this.setState({data:data.data});
            // console.log(JSON.stringify(this.state.data.rows))
            // console.log(this.state.data.rows.length)
            // const ullist = this.state.data.rows.map((row)=>{
              
            // });
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        var data = this.state.data;
        const disArray = new Array();
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                disArray[i] = <DiscussionElement key={i} text={data[i].wordDiscussion}></DiscussionElement>
            }
        }
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })} className='goodsDiscussion'>
              <div className='tabhead'>
              <TabList className='mytablist'>
                {/* <Tab >商品介绍</Tab>
                <Tab >规格与包装</Tab> */}
                <Tab >商品评价</Tab>
              </TabList>
              </div>
              {/* <TabPanel>ni hao </TabPanel>
              <TabPanel>ni hao a </TabPanel> */}
              <TabPanel>
                  {/* <DiscussionElement text="lll"></DiscussionElement> */}
                  {
                      disArray
                  }
              </TabPanel>
            </Tabs>
          );
    }
}
class GoodsDetail extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            data:new Array()
        }
    }

   

    render(){
        const params = this.props.location.state.goodsId; 
        // console.log(params)

        
        return(
        <div>
            <ShortCut></ShortCut>
           
            <div className='body'>
                <Header></Header>
                <hr className='hr'></hr>
                <ItemDetail goodsId={params}></ItemDetail>
                <div className='clear'></div>
                <GoodsTab goodsId={params}></GoodsTab>
            </div>
        </div>
        );
    }
}

export default GoodsDetail;
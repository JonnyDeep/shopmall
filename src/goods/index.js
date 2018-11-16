import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShortCut from '../shotcut/index.js';

import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
import { stat } from 'fs';
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

class Category extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>

            </div>
        );
    }

}

class GoodsItem extends Component{
    constructor(props){
        super(props);
        this.state={
           data:this.props.datag
        }
       
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.datag!=this.props.datag){
            this.setState({data:nextProps.datag})
        }
    }

    componentWillMount(){
        
    }
    componentDidMount(){
        // console.log("bbbvvxx"+this.state.data)
        
    }

    render(){
        // console.log(JSON.stringify(this.props.datag))
        let goodsImages = this.props.datag.url;
        let goodsZoomImages = this.props.datag.zoomUrl;
        let goodsName = this.props.datag.goodsName;
        let goodsPrice = this.props.datag.price;
    
    
        return(
            <div className='itemwrap'>
                <div className='p-img'>
                    <a>
                        <img src={'http://localhost:8081/file/'+goodsImages}>
                        </img>
                    </a>
                </div>
                <div className='zoom'>
                    <ul>
                        {
                            
                            goodsZoomImages.map((zoomImage,index)=>{
                                // console.log("zoomImage"+zoomImage)
                                return(
                                    <li key={index} >
                                        <img src={'http://localhost:8081/file/'+zoomImage}>
                                        </img>
                                    </li>
                                )
                            })
                        }
                       
                    </ul>
                </div>
                <div className='price'>
                    <strong>￥{goodsPrice}</strong>
                </div>
                <div className='pname'>
                    <a>
                    【买一送一，两件装，双十一大优惠】{goodsName}
                    </a>
                </div>

                <div className='commit'>
                    <strong>4000+</strong>条评论
                </div>

                <div className='shop'>
                    <a>nike 专卖店 <img src={require('../images/kefu.png')}></img></a>
                </div>

                <div className='icon'>
                    <i>满减</i>
                </div>

            </div>
        );
    }
}

class AdItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='ad-img'>
                    <img></img>
                </div>
                <div className='price'>
                    <strong>￥123</strong>
                </div>
                <div className='ad-name'>
                    <a>
                        <em>
                            过冬必备,什么审定数多少但是都是大家开始
                        </em>
                    </a>
                </div>
                <div className='ad-discussion'>
                    <em>已有4000人评论</em>
                </div>
            </div>
        );
    }
}

class Advertisement extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='advertisement'>
          
                    <h3 className='ad-title'>商品精选</h3>

                
                    <span className='u-ad'></span>
                   <div className='ad-wrap'>
                    <ul>
                        <li>
                            <AdItem></AdItem>
                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                   </div>
                </div>
            </div>
        );
    }
}

const rows={
    url:new Array(),
    zoomUrl:new Array(),
    goodsName:"",
    price:""
}
class GoodsList extends Component{

    static contextTypes={
        router:PropTypes.object
    }
    constructor(props,context){
        super(props,context);
        this.state={
            data:{
                rows:new Array()
            }
        }
    }
    componentWillUpdate(nextProps,nextState){
        if(nextState.data!=this.state.data){
            this.setState({data:nextState.data})
        }
    }
    componentWillMount(){
        
    }
   componentDidMount(){
    fetch('http://127.0.0.1:8081/goods/queryGoods?q='+'衣服',{
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
        //  console.log(JSON.stringify(data));
        this.setState({data:data.data});
        // console.log(JSON.stringify(this.state.data.rows))
        // console.log(this.state.data.rows.length)
        // const ullist = this.state.data.rows.map((row)=>{
          
        // });
    }).catch((err)=>{
        console.log(err);
    })
   }

   goodsDetailQuery(value){
 
       
       this.context.router.history.push({pathname:"/GoodsDetail/",state:{goodsId:value}});  
   }
    render(){
        // console.log("item list->"+this.state.data);
        // console.log("ssss"+this.state.data)
        // console.log("render"+this.state.data.rows)
        return(
            <div>
                <div className='goodsTable'>
                    <ul>
                        {
                             this.state.data.rows.map((item,index)=>{
                               return (
                                <li key={index} onClick={()=>{this.goodsDetailQuery(item.goodsId)}}>
                                     <GoodsItem datag={item}></GoodsItem>
                                </li>
                               )         
                             })       
                        }
                   
                    </ul>
                </div>
            </div>
        );
    }
}

function SearchCol(props){
    // console.log("props"+JSON.stringify(props.value))

    function liClick(value,index){
        console.log(value,index);
    }
    
    return(
        <div>
        <div className='searchRow'>

            <div className='sl-key'>
                <strong>{props.value.fatherName}</strong>
            </div>
            <div className='sl-value'>
                <ul>
                    {
                        props.value.childName.map((elem,index)=>{
                            return(
                                <li key={index} onClick={()=>{liClick(elem,index)}}><a>{elem}</a></li>
                            );
                        })
                    }
                </ul>
            </div>
            
        </div>
        <div className='clear'></div>
        </div>
    );
}
class ResultTab extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                rows:new Array()
            }
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8081/goods/queryGoodsByTag?q='+'衣服',{
            method:'GET',
            headers:{
                // "content-Type": "text/html;charset=UTF-8",
                "content-Type":"application/json;charset=UTF-8",
            },
            credentials:'include',
            mode:'cors',
            cache:'default'
        }).then((response)=>{

            if(response.ok){
                return response.json();
            }else{
                console.log(response.status);
            }
        }).then(data=>{
            // console.log(data.data);
            this.setState({data:data.data});
              
        }).catch((err)=>{
            console.log(err);
        });
       
    }

    render(){
        
        const rows = this.state.data;
        const search = new Array();
        if(rows.length>0){
            
            for(var i = 0;i<rows.length;i++)
            {
                
                search[i]=<SearchCol value={rows[i]} key={i}></SearchCol>
            }
        } 
        
        return(
            <div>
                <div className='searchTab'>
                    {search}
                </div>
            </div>
        );
    }
}

class GoodsTable extends Component{

    render(){
        return(
        <div>
            <ShortCut></ShortCut>
           
            <div className='body'>
                <Header></Header>
                <hr className='hr'></hr>
                <ResultTab></ResultTab>
                <Advertisement></Advertisement>
                <GoodsList></GoodsList>
            </div>
        </div>
        );
    }
}

export default GoodsTable;

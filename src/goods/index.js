import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShortCut from '../shotcut/index.js';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
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
    componentDidMount(){
        console.log("bbbvvxx"+this.state.data)
        
    }
    render(){
        console.log(JSON.stringify(this.props.datag))
        return(
            <div className='itemwrap'>
                <div className='p-img'>
                    <a>
                        <img src={require('../images/shangyi.jpg')}>
                        </img>
                    </a>
                </div>
                <div className='zoom'>
                    <ul>
                        <li>
                            <img src={require('../images/yifuxiao1.jpg')}></img>
                        </li>
                        <li>
                            <img src={require('../images/yifuxiao2.jpg')}></img>
                        </li>
                    </ul>
                </div>
                <div className='price'>
                    <strong>￥699.00</strong>
                </div>
                <div className='pname'>
                    <a>
                    【买一送一，两件装】长袖t恤男士韩版青年春秋潮上
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

class GoodsList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:""
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
         console.log(JSON.stringify(data));
        this.setState({data:data.data.rows[0]});
    }).catch((err)=>{
        console.log(err);
    })
   }

    render(){
        // console.log("item list->"+this.state.data);
        console.log("ssss"+this.state.data)
        return(
            <div>
                <div className='goodsTable'>
                    <ul>
                        <li>
                            <GoodsItem datag={this.state.data}></GoodsItem>
                        </li>
                        <li>
                            <GoodsItem datag={this.state.data}></GoodsItem>
                        </li>
                        <li>
                            <GoodsItem datag={this.state.data}></GoodsItem>
                        </li>
                        <li>
                            <GoodsItem datag={this.state.data}></GoodsItem>
                        </li>
                        <li>
                            <GoodsItem datag={this.state.data}></GoodsItem>
                        </li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                </div>
            </div>
        );
    }
}

class ResultTab extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='searchTab'>
                    <div className='searchRow'>
                        <div className='sl-key'>
                            <strong>男装:</strong>
                        </div>
                        <div className='sl-value'>
                            <ul>
                                <li><a>asd</a></li>
                                <li><a>asd</a></li>
                                <li><a>asd</a></li>
                                <li><a>asd</a></li>
                                <li><a>asd</a></li>
                                <li><a>asd</a></li>
                                <li><a>asd</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='clear'></div>
                    <div className='searchRow'>
                        <div className='sl-key'>
                            <strong>女装:</strong>
                            
                        </div>
                        <div className='sl-value'>
                            <ul>
                                <li><a>asd</a></li>
                            </ul>
                        </div>
                    </div>
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
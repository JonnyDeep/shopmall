import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ShortCut from '../shotcut/index.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
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
        const param = this.props.param;
        
        return(
            <div>
                 <div className='allcheck'>
                        <input type='checkbox'/>
                    </div>
                   
                    <div>
                        <a>
                            nike {param.sellerId}                    
                        </a>
                    </div>
                
                    <hr className='myhr'></hr>
                <div className='goods'>
                   
                    <div>
                        <div className='cell'>
                            <div className='singleCheck'>
                                <input type='checkbox' name="itemCheck"></input>
                            </div>
                        </div>
                        <div className='cell'>
                           <div className='g-item'>
                           <div className='pp-img'>
                           
                                <img src={'http://localhost:8081/file/'+param.goodsImage}></img>
                            </div>
                            <div className='p-goodsname'>
                                {
                                    param.goodsName
                                }
                            </div>
                           </div>
                        </div>
                        <div className='cell'>
                            <div className='p-props'>
                                <p>颜色:{param.color}</p>
                                <p>尺码:{param.size}</p>
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-price'>
                                ￥{param.goodsPrice}
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-quantity'>
                                <div className='p-sub'>-</div>
                                <input type='text' className='tx-num' value={param.goodsNum}></input>
                                <div className='p-add'>+</div>
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-sum' ref='sum'>
                                <strong name='price-sum'>￥{param.goodsNum*param.goodsPrice}</strong>
                            </div>
                        </div>

                        <div className='cell'>
                            <div className='p-action'>
                                删除
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
        );
    }
}
class ItemsList extends Component{
    static contextTypes={
        router:PropTypes.object
    }
    constructor(props,context){
        super(props,context);
        this.state={
            count:0,
            data:{}
        }
    }

    redirect(href){
        // this.context.router.history.push({pathname:"/GoodsDetail/",state"{}}
        this.context.router.history.push({pathname:href});
    }


    caculate(){
        // console.log("ok");
        var obj=document.getElementsByName("price-sum");
        var checkObj = document.getElementsByName("itemCheck");
        let Allcount=0;
        // console.log(checkObj[0].checked)
        for(var i=0;i<obj.length;i++)
        {
            if(checkObj[i].checked){

                Allcount = Allcount+parseFloat(obj[i].childNodes[1].nodeValue);
                console.log("allcount:"+Allcount)
            }
        }
        this.setState({
            count:Allcount
        },()=>{
            console.log(this.state.count)
        });
        var paramdata = [];
        var orderGoodsVo = {};
        orderGoodsVo.sellId = 1;
        var goodsElemData = []
        var goodsElems = {};
        goodsElems.goodsId=1;
        goodsElems.num=2;
        goodsElems.price=99.0;
        goodsElemData.push(goodsElems);
        var goodsElems1 = {};
        goodsElems1.goodsId=2;
        goodsElems1.num=2;
        goodsElems1.price=99.0;
        goodsElemData.push(goodsElems1);
        orderGoodsVo.goodsElems=goodsElemData;
        paramdata.push(orderGoodsVo);
        var orders = {}
        orders.userId = 1;
        orders.goodsElems=paramdata;
   
 
        fetch('http://127.0.0.1:8081/orders/insertOrder/'+1,{
            method:'POST',
            headers:{
                // "content-Type": "text/html;charset=UTF-8",
                "content-Type":"application/json;charset=UTF-8",
            },
            body:JSON.stringify(orders),
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
            
            this.setState({data:data});
            
            if(data.code==="200"){
                console.log("==>code:"+data.code);
                this.redirect("/BuySuc");
            }
        }).catch((err)=>{
            console.log(err);
        })

        // console.log("==>data:"+this.state.data.code);
    }

    render(){
        const params = this.props.params;
        // console.log("-->itemlist param:"+JSON.stringify(params));
        const table = new Array();
        if(params.length>0)
        {
            // console.log("construct BuyItemTable")
            for(var i=0;i<params.length;i++)
            {
                table[i] = <BuyItemTable param={params[i]} key={i}></BuyItemTable>
            }
        }
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

                    {/* <BuyItemTable></BuyItemTable> */}
                    {table}
                    <div className='calculateBar'>
                        <div className='calculate'>
                            <Button bsStyle='danger' className='buy-btn' onClick={()=>{this.caculate()}}>去结算</Button>
                        </div>
                        <div className='total'>
                            合计
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
class BuyPage extends Component{
    constructor(props,context){
        super(props,context);
        this.state={

        }
        
    }

    defaultChange(){

    }
    render(){
        
        // console.log("-->buy param:"+JSON.stringify(this.props.location.state.goodsItem));
        var shopcar = new Array();
        shopcar = this.props.location.state.goodsItem;
        const itemArray = new Array();
        // console.log(itemArray.length)
        if(shopcar.length>0)
        {

            itemArray[0] = <ItemsList key={0} params={shopcar} ></ItemsList>

        }
        // console.log(itemArray.length)
        document.getElementById("total")
        return(
            <div>
                <ShortCut></ShortCut>
                
                <div className='bbody'>
                    <Header></Header>
                    <div className='clear'></div>
                    {/* <ItemsList></ItemsList> */}
                    {itemArray}
                   
                </div>
            </div>
        );
    }
}

export default BuyPage;
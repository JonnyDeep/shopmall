import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';
require('./login.css');
const QRCode = require('qrcode-react');

class SubmitButton extends Component{
    constructor(props) {
        super(props);
	}
	submit(){
        alert(this.props.value);
        // ajax
    }
	render(){
		return (
			<button onClick={()=>this.submit()}>提交</button>
		)
	}
}

class RequestStu extends Component{
    constructor(props){
        super(props);
        this.state ={
            test:{},
            arr:[]
        }
    }
    
    componentDidMount(){
        const body={"id":1};
        
        fetch('http://127.0.0.1:8081/customer/getCustomer?id=1',{
            method:'GET',
            headers:{
                // "content-Type": "text/html;charset=UTF-8",
                "content-Type":"application/json;charset=UTF-8",
            },
            mode:'cors',
            cache:'default'
        }).then((response)=>{
            console.log(response);
            console.log(response.ok);
            if(response.ok){
                return response.json();
                console.log(response.text());
            }else{
               
                console.log(response.status);
            }
        }).then(data=>{
            if(typeof data=='undefined'){
                let data={"nickName":""}
                this.setState({test:data})
                console.log(this.state.test)
            }else{
                console.log(data);
        
                this.setState({test:data});
            }
           
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.test.nickName
                }
            </div>
        );
    }
}

class QRCodeLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            url:""
        }
    }

    componentDidMount(){
        this.setState({
            url:this.props.url
        })
    }

    render(){
        return(
            <div className='qrcode'>
                
                <QRCode  size={200} value={this.state.url}/>
         
            </div>
        )
    }

}

const right={
    float:'right',
    color:'black'
    
};

const clear={
    clear:'both'
}

const loginbtnCss={
    margin:'15px 0 0 0',
    width:'100%',
    fontFamily:'黑体',
    fontSize:18
}

class NamePassWordLogin extends Component{
    constructor(props){
        super(props);
        this.sate={
            userName:"",
            passWord:""
        }
    }

    onSubmit(){
        console.log('submit');
        console.log(this.userName.value);
        console.log(this.passWord.value);
        let data={
            username:this.userName.value,
            password:this.passWord.value
        }
        fetch('http://127.0.0.1:8081/login',{
            method:'POST',
            headers:{
                // "content-Type": "text/html;charset=UTF-8",
                "content-Type":"application/json;charset=UTF-8",
            },
            credentials:'include',
            body:JSON.stringify(data),
            mode:'cors',
            cache:'default'
        }).then((response)=>{
            console.log(response);
            console.log(response.ok);
            if(response.ok){
                return response.json();
                console.log(response.text());
            }else{
                console.log(response.status);
            }
        }).then(data=>{
            console.log(data);
            this.setState({test:data});
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div className="namePasswordPanel">
                
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon><label><Glyphicon glyph='user'/></label></InputGroup.Addon>
                            <FormControl id="userName" inputRef={ref=>{this.userName=ref;}} type="text" placeholder="用户名/手机号/邮箱"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon><label><Glyphicon glyph='lock'/></label></InputGroup.Addon>
                            <FormControl type="password" inputRef={ref=>{this.passWord=ref;}} placeholder="密码"/>
                        </InputGroup>
                    </FormGroup>
                    <Link to="/findPassWord" style={right}>
                        忘记密码
                    </Link>
                    <div style={clear}></div>
                    <div>
                        <Button bsStyle='danger' style={loginbtnCss} onClick={()=>this.onSubmit()}>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;入</Button>
                    </div>
            </div>
        )
    }
} 

function Greeting(props){
    const loginMethed = props.loginMethed;
    if(loginMethed=='qrcode'){
        return <QRCodeLogin url="www.shopmall"/>
    }else{
        return <NamePassWordLogin />
    }
}

function Tips(props){
    return <div className='tips'><Glyphicon glyph='info-sign' className='glyphspn'></Glyphicon><span>依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版《京东隐私政策》已上线，将更有利于保护您的个人隐私。</span></div>
}
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            loginMethed:"qrcode"
        }
    }

    componentDidMount(){
        
    }



    qrLoginMethod(){
    
        console.log(this.state.loginMethed);
        this.setState({
            loginMethed:'qrcode'
        });
        
    }

    namePasswordLoginMethod(){
        
        console.log(this.state.loginMethed);
        this.setState({
            loginMethed:'userPassword'
        });
        
    }
    render(){
       let loginForm = null;
       if(this.state.loginMethed=='qrcode'){
           loginForm = <QRCodeLogin url="www.shopmall.com"/>
       }else{
           loginForm = <NamePassWordLogin/>
       }
        return(
            <div>
              <div>
                  <div className='tophead' >
                    <div className='beaner'>
                        <img src={require('../images/logo.jpg')}/><h3>欢迎登入</h3>
                        <span>登入页面，调查问卷</span>
                        <div style={clear}></div>
                    </div>
                  </div>
                  <Tips></Tips>
                  <div className='content'>
                    <div className='backgroundContent'>
                        <div className="login">
                            <div>
                                <Panel bsStyle="warning" className="loginPanel">
                                    <Panel.Heading className='pannelhaedFont'><Glyphicon glyph='info-sign' className='glyphspn'></Glyphicon><span>京东不会以任何理由要求您转账汇款，谨防诈骗。</span></Panel.Heading>
                                    <Panel.Body>
                                        <form>
                                            <div className="loginMehtod">
                                                <div className="loginMehtodspan" onClick={()=>this.namePasswordLoginMethod()}>账号登入<span>|</span></div>
                                                <div className="loginMehtodspan" onClick={()=>this.qrLoginMethod()}>二维码登入</div>
                                            </div>
                                            <hr className='loginhr'></hr>
                                            <Greeting loginMethed={this.state.loginMethed}/> 
                                        </form>
                                    </Panel.Body>
                                    <Panel.Footer>
                                        <div className='menu'>
                                            <ul >
                                                <li>
                                                    <Link to="">QQ<span className='spanli'>|</span></Link>
                                                </li>
                                                
                                                <li>
                                                    <Link to="">微信</Link>
                                                </li>
                                                <span>
                                                <li>
                                                    <Link to="">立即注册</Link>
                                                </li>
                                                </span>
                                            </ul>
                                        </div>
                                    </Panel.Footer>
                                </Panel>
                            </div>
                        </div>
                    </div>
                  </div >
              </div>

              <div className='bottom'>
                <div className='link'>
                    <div className='footermenu'>
                        <ul>
                            <li><Link to=""><span className='LinkSpan'>关于我们</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>联系我们</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>人才招聘</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>商家入住</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>手机商城</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>友情练级</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>销售联盟</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>商城社区</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>商城公益</span><span className='footerspanli'>|</span></Link></li>
                            <li><Link to=""><span className='LinkSpan'>English site</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className='copyright'>
                    Copyright © 2004-2018  商城 Shopmall.com 版权所有
                </div>
              </div>
             
                hollo,world
                <Link to="/first">
                    <div>to first</div>
                </Link>
                <SubmitButton value="hello word"/>  
                <RequestStu/>
            </div>
        );
    }
}

export default Login;
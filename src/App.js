import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import ShortCut from '../src/shotcut/index.js';
import {Button,FormGroup,InputGroup,FormControl,Glyphicon,Carousel,Tabs,Tab} from'react-bootstrap';
import './App.css';

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
      <div className='tabs'>
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="促销" className='tabright'>
          <ul>
            <li>
            <Link to="">
            小米笔记本只要4999
            </Link>
            </li>
            <li>
            <Link to="">
            小米笔记本只要4999
            </Link>
            </li>
            <li>
            <Link to="">
            小米笔记本只要4999
            </Link>
            </li>
          </ul>
          
          
        </Tab>
        <Tab eventKey={2} title="公告">
          
        </Tab>
        
      </Tabs>

      </div>
    );
  }
}

class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="headWrap">
        <div className="headleft">
          <div className='center'>
            <img src={require('./images/logo.jpg')}></img>
          </div>
        </div>
        {/* <div className='clear'></div> */}
        <div className="searchWrap">
          <div className='center'>
          <FormGroup className="search">
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Button>
                <Button><Glyphicon glyph="search" className='iconText'/>搜索</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
          </div>
        </div>
        {/* <div className='clear'></div> */}
        <div  className="headright">
          <div className='center'>
            <img src={require('./images/TBhuodong.png')}></img>
          </div>
           
        </div>
        <div className='clear'></div>
        {/* <div className='namenu'></div> */}
        <div className='navmenu'>
          <div className="thematicmarket">
            <div className='head'>
              主题导航
            </div>
          </div>
          <ul>
            <li><a href="https://ju.taobao.com/">聚划算</a></li>
            <li><a href="https://ju.taobao.com/">商城小超市</a></li>
            <li><a href="https://ju.taobao.com/">电器城</a></li>
            <li><a href="https://ju.taobao.com/">数码3C</a></li>
            <li><a href="https://ju.taobao.com/">苏宁易购</a></li>
            <li><a href="https://ju.taobao.com/">亚马逊</a></li>
            <li><a href="http://book.dangdang.com/">当当网</a></li>
            <li><a href="https://ju.taobao.com/">商城精选</a></li>
            <li><a href="https://ju.taobao.com/">汽车买卖</a></li>
            <li><a href="https://ju.taobao.com/">抱团旅游</a></li>
          </ul>
        </div>
        <div className='Carouselbody'>
        <Carousel className='Carousel'>
          <Carousel.Item>
            <img width={520} height={280} alt="300x400" src={require('./images/first.jpg')}/>
            
          </Carousel.Item>
          <Carousel.Item>
          <img width={520} height={280} alt="300x400" src={require('./images/first.jpg')}/>
            
          </Carousel.Item>
          <Carousel.Item>
          <img width={520} height={280} alt="300x400" src={require('./images/first.jpg')}/>
           
          </Carousel.Item>
        </Carousel>
      </div>

        <div className='jinritui'>
          <img width={160} height={280} alt="300x400" src={require('./images/jinritui.jpg')}/>
        </div>

        <div className='rightlogin'>
          <div>
            <div>
              <div className='divcss5'>
                <img width={160} height={280} alt="300x400" src={require('./images/head.jpg')}/>
              </div>
              <div className="hitext">
                Hi~,登入可以购物哟
              </div>
              <div className='btngroup'>
                <Link to="">
                  <span className='linkspan'>
                  登   入
                  </span>
                </Link>
                <Link to="">
                <span className='linkspan'>
                  注   册
                  </span>
                </Link>
              
                <div className='warnning'>
                  网上有害信息举报
                </div>
                <ControlledTabs/>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>

        
      </div>
     
    );
  }
}

class ImageCarousel extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ShortCut/>
        <Header/>
        <div className='clear'></div>
        <ImageCarousel/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <Link to="/login">
      //         <div>去登陆</div>
      //     </Link>
      //   </header>
      // </div>
    );
  }
}

export default App;



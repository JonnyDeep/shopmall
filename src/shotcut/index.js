import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Glyphicon} from'react-bootstrap';

require('./index.css');

class ShortCut extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Navbar>
                    {/* <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header> */}
                    <Nav>
                        <NavDropdown eventKey={1} title="中国大陆" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>全球</MenuItem>
                            <MenuItem eventKey={1.2}>中国大陆</MenuItem>
                            <MenuItem eventKey={1.3}>中国香港</MenuItem>
                            <MenuItem eventKey={1.4}>中国澳门</MenuItem>
                            <MenuItem eventKey={1.5}>中国台湾</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.6}>美国</MenuItem>
                            <MenuItem eventKey={1.7}>日本</MenuItem>
                            <MenuItem eventKey={1.8}>德国</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="#">
                            亲，请登入
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            免费注册
                        </NavItem>
                        <NavItem eventKey={4} href="#">
                            手机商城
                        </NavItem>
                    </Nav>
                    
                    <div className='rightrNav'>
                        <Nav>
                            <NavDropdown eventKey={1} title="卖家中心" id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1}>免费开店</MenuItem>
                                <MenuItem eventKey={1.2}>出售中的宝贝</MenuItem>
                                <MenuItem eventKey={1.3}>已卖出的宝贝</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={1} title="联系客服" id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1}>消费者客服</MenuItem>
                                <MenuItem eventKey={1.2}>卖家家客服</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </div>
                    <div className='rightrNavline'>|</div>
                    <div className='rightrNav'>
                        <Nav>
                            <NavDropdown eventKey={1} title="我的商城" id="basic-nav-dropdown">
                                <MenuItem eventKey={1.1}>已买到的商品</MenuItem>
                                <MenuItem eventKey={1.2}>我的足迹</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2} href="#">
                                <Glyphicon glyph="shopping-cart" className='iconText'/>购物车
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                <Glyphicon glyph="star" className='iconText'/>收藏夹
                            </NavItem>
                            <NavItem eventKey={4} href="#">
                                商品分类
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default ShortCut;


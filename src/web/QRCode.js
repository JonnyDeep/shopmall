import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {Navbar,Jumbotron,Button, FormGroup, ControlLabel, InputGroup, Panel, Grid,Row,Col, FormControl, Glyphicon} from'react-bootstrap';

const QRCode = require('qrcode-react');



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
        alert(this.props.url)
        console.log(this.props.url)
    }

    render(){
        return(
            <div className='qrcode'>
                
                <QRCode  size={200} value={this.state.url}/>
         
            </div>
        )
    }

}


export default QRCodeLogin;
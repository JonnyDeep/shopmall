import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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
class Login extends Component{
    
    render(){
        return(
            <div>
                hollo,world
                <Link to="/first">
                    <div>to first</div>
                </Link>
                <SubmitButton value="hello word"/>  
            </div>
        );
    }
}

export default Login;
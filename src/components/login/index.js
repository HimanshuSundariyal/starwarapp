import React from 'react';
import './login.css';
import { connect  } from 'react-redux'; 
import $ from 'jquery';
import { loginUser  } from '../../actions'; 
import {Alert,Image} from 'react-bootstrap';
import Loadingimg from '../../images/loading.gif';
class Login extends  React.Component{
	constructor(props) {  
	super(props);
	this.state={
		username:'',
		password:'',
		error:false,
		showHide:false
	}
}

handelChange = (event) =>{
	this.setState({ [event.target.name]: event.target.value });
}

handelSubmit = (e) =>{
	$('#overlay').show();
	let username = this.state.username;
	let password = this.state.password;
	this.setState({showHide:true});
	if(username == '' || password =='')
	{
		this.setState({error:true});
		$('#overlay').hide();
	}
	else
	{
		this.props.loginUser(username, password);
		this.setState({error:false});
	}
	e.preventDefault();
}

render(){

if(this.props.userdata)
{
	this.props.history.push("/search");
}
if(this.state.error || this.props.userdatefound || this.props.wrongdetails)
{
	$('#overlay').hide();
}
const showHide = {
	'display': this.state.showHide ? 'block' : 'none'
	};
    return(
		<React.Fragment>
			<div id="overlay">
				<Image className="loadingimg" src={Loadingimg} />
			</div>	
			<div className="login-reg-panel">									
				<div className="white-panel">
					<div className="login-show show-log-panel">
					{ this.state.error && (<Alert variant="danger">Please fill all the fields</Alert>)  }
					{ this.props.userdatefound && (<Alert variant="danger">No user Found</Alert>)  }
					{ this.props.wrongdetails && (<Alert variant="danger">Username or password is wrong</Alert>)  }
						<h2>LOGIN</h2>
						<form onSubmit={this.handelSubmit}>
							<input type="text" placeholder="Username" name="username" onChange={this.handelChange} />
							<input type="password" placeholder="Password" name="password"  onChange={this.handelChange} />
							<input variant="primary" type="submit" value="Login" />
						</form>
					</div>
				</div>
				<div className="register-info-box">
					<h2>Login Tips</h2>
					<p><strong>Username: Luke Skywalker</strong></p>
					<p><strong>password: 19BBY</strong></p>
				</div>
			</div>	
		</React.Fragment>
    );
}
}

const mapStatetoprops = state => {
    return {
		userdatefound: state.userdatefound,
		wrongdetails: state.wrongdetails,
		userdata: state.userdata,
    }
}


const mapDispatchToProps = (dispatch) => {
	return {
		loginUser:(username,password) => { dispatch(loginUser(username,password)) }
	}
}
export default connect(mapStatetoprops,mapDispatchToProps)(Login);
import React, { Component } from "react";

class Login extends Component {
	onSubmit(e) {
		e.preventDefault();
		this.props.login(e.target[0].value, e.target[1].value);
	}
	render() {
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input type="email" />
				<input type="password" />
				<button type="submit">Login!</button>
			</form>
		);
	}
}

export default Login;

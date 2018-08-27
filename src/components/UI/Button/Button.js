import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

const ButtonElement = styled(
	posed.button({
		unHovered: {
			scale: 1,
		},
		hovered: {
			scale: 1.1,
		},
	})
)`
	transition: background-color 0.1s linear, box-shadow 0.1s linear,
		color 0.1s linear;
	background: white;
	color: #444;
	border: none;
	width: 200px;
	height: 40px;
	border-radius: 8px;
	margin: 0 auto;
	cursor: pointer;
	font-size: 18px;
	box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.1);
	outline: none;
	&:hover {
		box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.15),
			inset 0 0 0 1px rgba(0, 0, 0, 0.1);
	}
	&.active {
		background-color: #3498db;
		color: white;
		box-shadow: 1px 1px 15px 2px rgba(52, 152, 219, 0.7),
			inset 0 0 0 1px rgba(52, 152, 219, 0.1);
	}
`;

class Button extends Component {
	state = {
		isHovering: false,
	};

	render() {
		const classes = this.props.active ? ["active"] : null;
		return (
			<ButtonElement
				className={classes}
				pose={this.state.isHovering ? "hovered" : "unHovered"}
				onMouseEnter={() => this.setState({ isHovering: true })}
				onMouseLeave={() => this.setState({ isHovering: false })}
				onClick={() => this.props.onClick}
			>
				{this.props.children}
			</ButtonElement>
		);
	}
}

export default Button;

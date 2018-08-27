import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Aux from "../../../hoc/Aux/Aux";
import DateControls from "../DateControls/DateControls";
import DatePicker from "react-datepicker";
import moment from "moment";
import posed from "react-pose";

const NavContainer = styled.div`
	display: flex;
	width: 90%;
	max-width: 1000px;
	margin: 40px auto 10px;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	color: #666;
`;

const NavItems = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	color: #666;
`;

const NavItem = styled(NavLink)`
	transition: color ease 0.5s, text-shadow ease 0.5s;
	font-size: 16px;
	display: flex;
	margin: 0 10px;
	color: inherit;
	text-decoration: none;
	width: 70px;
	justify-content: center;
	&:hover {
		color: #3498db;
		text-shadow: 0 0 2px rgba(52, 152, 219, 0.2);
	}
	&.active {
		color: #3498db;
	}
`;

const NavUnderlineContainer = styled.div`
    position: relative
    z-index: -1;
    display: flex;
    margin: 4px auto 0;
    background-color: rgba(0,0,0,.1);
    width: 160px;
	justify-content: center;
`;
const NavUnderline = styled(
	posed.div({
		answer: {
			x: "-45px",
		},
		review: {
			x: "45px",
		},
	})
)`
	box-shadow: 0 0 1px rgba(52, 152, 219, 0.2);
	height: 2px;
	background-color: #3498db;
	width: 70px;
	position: relative;
`;

class QuestionNavigation extends Component {
	render() {
		return (
			<NavContainer>
				<div>
					<NavItems>
						<NavItem to="/answer" exact activeClassName="active">
							Answer
						</NavItem>
						<NavItem to="/review" exact activeClassName="active">
							Review
						</NavItem>
					</NavItems>
					<NavUnderlineContainer>
						<NavUnderline
							pose={this.props.location.pathname.slice(1)}
						/>
					</NavUnderlineContainer>
				</div>
				<DateControls />
			</NavContainer>
		);
	}
}

export default QuestionNavigation;

import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-custom.css";

class DateInput extends Component {
	render() {
		return <div onClick={this.props.onClick}>{this.props.value}</div>;
	}
}

const DateContainer = styled.div`
	transition: color ease 0.5s, text-shadow ease 0.5s;
	color: #666;
	cursor: pointer;
	position: relative;
	z-index: 10;
	&:hover {
		color: blue;
		color: #3498db;
		text-shadow: 0 0 2px rgba(52, 152, 219, 0.2);
	}
`;

const UnderlineContainer = styled.div`
    position: relative
    z-index: -1;
    display: flex;
    margin: 4px auto 0;
    background-color: rgba(0,0,0,.1);
    width: 120px;
	justify-content: center;
	height: 2px;

`;

const Icon = styled.div`
	width: 20;
	height: 20;
	margin: 0 10px;
`;

const DateElement = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 7px;
`;

class DateControls extends Component {
	state = {
		startDate: moment(),
	};
	render() {
		return (
			<DateContainer>
				<DateElement>
					<Icon>
						<i class="fas fa-caret-left" />
					</Icon>
					<DatePicker
						selected={this.state.startDate}
						customInput={<DateInput />}
						withPortal
					/>
					<Icon>
						<i class="fas fa-caret-right" />
					</Icon>
				</DateElement>
				<UnderlineContainer />
			</DateContainer>
		);
	}
}

export default DateControls;

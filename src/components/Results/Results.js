import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

const ResultsContainer = styled.div`
	transition: opacity 0.3s ease;
	display: flex;
	justify-content: center;
	color: #444;
	flex-direction: column;
	position: absolute;
	width: 100%;
	&.slide-enter {
		opacity: 1;
	}
	&.slide-enter-active {
		opacity: 1;
		z-index: 2;
	}
	&.slide-exit-active {
		opacity: 0;
		z-index: 1;
	}
`;

const PosedResults = posed.div({
	enter: {
		y: 0,
		staggerChildren: 150,
	},
	exit: {
		y: "100px",
	},
});

const PosedResult = styled(
	posed.div({
		enter: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 1.2 },
	})
)`
	background-color: white;
	height: 200px;
	box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
`;

class Results extends Component {
	state = {
		resultsPose: "exit",
	};

	componentDidMount() {
		this.setState({
			resultsPose: "enter",
		});
	}
	render() {
		return (
			<ResultsContainer>
				<PosedResults pose={this.state.resultsPose}>
					<PosedResult key="test">TEST</PosedResult>
				</PosedResults>
			</ResultsContainer>
		);
	}
}

export default Results;

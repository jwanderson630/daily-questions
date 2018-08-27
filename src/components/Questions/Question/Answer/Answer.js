import React from "react";
import styled from "styled-components";
import "./Answer.css";

const AnswerContainer = styled.div`
	user-select: none;
	flex: 0 1 15%;
	box-sizing: border-box;
	min-width: 35px;
	font-size: 18px;
	transition: all 0.15s linear;
	color: inherit;
	background-color: white;
	box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.1),
		inset 0 0 0 1px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	&:hover {
		box-shadow: 1px 1px 15px 4px rgba(0, 0, 0, 0.15),
			inset 0 0 0 1px rgba(0, 0, 0, 0.1);
		transform: scale(1.1);
	}
	&.selected {
		background-color: #3498db;
		color: white;
		box-shadow: 1px 1px 15px 2px rgba(52, 152, 219, 0.7),
			inset 0 0 0 1px rgba(52, 152, 219, 0.1);
	}
	&.selected:hover {
		background-color: #3498db;
		color: white;
		box-shadow: 1px 1px 20px 4px rgba(52, 152, 219, 0.7),
			inset 0 0 0 1px rgba(52, 152, 219, 0.1);
	}
`;

const AnswerInput = styled.input.attrs({
	type: "radio",
})`
	display: none;
`;
const AnswerLabel = styled.label`
	padding: 10px 5px;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
`;

const answer = props => {
	const classes = props.selected ? ["selected"] : null;

	return (
		<AnswerContainer className={classes}>
			<AnswerLabel
				htmlFor={"answer" + props.id + props.children}
				onClick={() => props.changeAnswer(props.id, props.value)}
			>
				{props.children}
			</AnswerLabel>
			<AnswerInput
				name={props.id}
				id={"answer" + props.id + props.children}
			/>
		</AnswerContainer>
	);
};

export default answer;

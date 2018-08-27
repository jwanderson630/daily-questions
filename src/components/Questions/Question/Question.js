import React from "react";
import styled from "styled-components";
import Answer from "./Answer/Answer";
import posed from "react-pose";

const Question = styled.div`
	background-color: white;
	border-radius: 8px;
	box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.1);
	margin: 0 auto 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	flex-wrap: wrap;
	overflow: hidden;
`;

const Answers = styled.div`
	display: flex;
	box-sizing: border-box;
	margin: 0 auto;
	flex: 1 1 100%;
	justify-content: space-around;
	background-color: #ecf0f1;
	height: 100%;
	padding: 20px;
	@media (min-width: 700px) {
		flex: 1 1 40%;
		max-width: 300px;
		justify-content: space-between;
	}
`;

const QuestionText = styled.div`
	box-sizing: border-box;
	display: flex;
	flex: 1 1 60%;
	font-size: 18px;
	padding-bottom: 5px;
	padding: 20px;
`;

const question = props => {
	return (
		<div ref={props.hostRef}>
			<Question>
				<QuestionText>{props.question.text}</QuestionText>
				<Answers>
					{props.answerValues.map(value => {
						return (
							<Answer
								id={props.question.id}
								key={props.question.id + "answer" + value}
								value={value}
								selected={props.question.answer === value}
								changeAnswer={(id, answer) =>
									props.changeAnswer(id, answer)
								}
							>
								{value}
							</Answer>
						);
					})}
				</Answers>
			</Question>
		</div>
	);
};

export default question;

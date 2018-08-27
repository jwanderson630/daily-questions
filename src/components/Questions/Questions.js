import React, { Component } from "react";
import Question from "./Question/Question";
import AnimatedNumber from "react-animated-number";
import posed from "react-pose";
import Button from "../UI/Button/Button";
import styled from "styled-components";

const QuestionsContainer = styled.div`
	transition: opacity 0.3s ease;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #444;
	position: absolute;
	width: 100%;
	z-index: 2;
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

const PosedQuestion = styled(
	posed(Question)({
		enter: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 1.2 },
	})
)``;

const PosedQuestions = posed.div({
	enter: {
		y: 0,
		staggerChildren: 50,
	},
	exit: {
		y: "100px",
	},
});

const SubmitButtonRow = styled(
	posed.div({
		enter: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 1.2 },
	})
)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
`;

const Score = styled.div`
	font-size: 28px;
	flex: 1 1 50%;
`;

class Questions extends Component {
	state = {
		questionsPose: "exit",
		displayScore: 0,
	};

	componentDidMount() {
		this.setState({
			questionsPose: "enter",
		});
	}

	updateScore() {
		if (this.props.currentScore === this.state.displayScore) {
			return;
		} else if (this.state.displayScore < this.props.currentScore) {
			const newDisplayScore = this.state.displayScore + 1;
			this.setState({
				displayScore: newDisplayScore,
			});
		} else if (this.state.displayScore > this.props.currentScore) {
			const newDisplayScore = this.state.displayScore - 1;
			this.setState({
				displayScore: newDisplayScore,
			});
		}
	}
	render() {
		return (
			<QuestionsContainer>
				<PosedQuestions pose={this.state.questionsPose}>
					{this.props.questions.map(question => {
						return (
							<PosedQuestion
								key={question.id}
								question={question}
								answerValues={[0, 1, 2, 3, 4, 5]}
								changeAnswer={(id, answer) =>
									this.props.answerSelectHandler(id, answer)
								}
							/>
						);
					})}
					<SubmitButtonRow key="submitRow">
						<Score>
							Score:{" "}
							{this.props.currentScore !== null ? (
								<AnimatedNumber
									value={this.props.currentScore}
									stepPrecision={0}
								/>
							) : (
								"NA"
							)}
						</Score>
						<Button>Review Day</Button>
					</SubmitButtonRow>
				</PosedQuestions>
			</QuestionsContainer>
		);
	}
}

export default Questions;

import React, { Component } from "react";
import Questions from "../../components/Questions/Questions";
import QuestionNavigation from "../../components/Navigation/QuestionNavigation/QuestionNavigation";
import Results from "../../components/Results/Results";
import Edit from "../../components/Edit/Edit";
import Aux from "../../hoc/Aux/Aux";
import firebase from "firebase";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Login from "../../components/Auth/Login/Login";

const Container = styled.div`
	position: relative;
	width: 90%;
	max-width: 1000px;
	margin: 20px auto;
`;

var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBPkVtMHtQDLNUQHLebpsJXgorI0etP3Jw",
	authDomain: "daily-questions-d67c4.firebaseapp.com",
	databaseURL: "https://daily-questions-d67c4.firebaseio.com",
	projectId: "daily-questions-d67c4",
	storageBucket: "daily-questions-d67c4.appspot.com",
	messagingSenderId: "390443920606",
});

class QuestionContainer extends Component {
	state = {
		questions: [
			{ text: "Question 1", answer: null, id: "q1" },
			{ text: "Question 2", answer: null, id: "q2" },
			{ text: "Question 3", answer: null, id: "q3" },
			{ text: "Question 4", answer: null, id: "q4" },
		],
		currentScore: null,
		prevScore: null,
	};

	login(email, password) {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
	}

	updateScore(questions) {
		return new Promise((resolve, reject) => {
			let score = 0;
			let max = 0;
			for (let question of questions) {
				if (question.answer !== null) {
					score = score + question.answer;
					max = max + 5;
				}
			}
			resolve(
				Math.floor((score / max) * 100) >= 0
					? Math.floor((score / max) * 100)
					: null
			);
		});
	}

	updateQuestions(questionId, newAnswer) {
		return new Promise((resolve, reject) => {
			const updatedQuestions = [...this.state.questions];
			const questionIndex = updatedQuestions.findIndex(
				question => questionId === question.id
			);
			const updatedQuestion = {
				...updatedQuestions.find(
					question => questionId === question.id
				),
			};
			updatedQuestion.answer =
				newAnswer === updatedQuestion.answer ? null : newAnswer;
			updatedQuestions[questionIndex] = updatedQuestion;
			resolve(updatedQuestions);
		});
	}

	async answerSelectHandler(id, answer) {
		const prevScore = this.state.currentScore;
		const updatedQuestions = await this.updateQuestions(id, answer);
		const updatedScore = await this.updateScore(updatedQuestions);
		this.setState({
			questions: updatedQuestions,
			currentScore: updatedScore,
			prevScore: prevScore,
		});
	}

	render() {
		return (
			<Aux>
				<QuestionNavigation location={this.props.location} />
				<Container>
					<TransitionGroup>
						<CSSTransition
							key={this.props.location.key}
							classNames="slide"
							timeout={300}
						>
							<Switch location={this.props.location}>
								<Route
									path="/answer"
									render={props => (
										<Questions
											currentScore={
												this.state.currentScore
											}
											prevScore={this.state.prevScore}
											questions={this.state.questions}
											answerSelectHandler={(id, answer) =>
												this.answerSelectHandler(
													id,
													answer
												)
											}
										/>
									)}
								/>
								<Route
									path="/review"
									render={props => <Results />}
								/>
								<Route
									path="/edit"
									render={props => <Edit />}
								/>
								<Route
									path="/login"
									render={props => (
										<Login login={this.login} />
									)}
								/>
								<Redirect to="/answer" />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</Container>
			</Aux>
		);
	}
}

export default QuestionContainer;

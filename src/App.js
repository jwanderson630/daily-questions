import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar/Navbar";
import QuestionContainer from "./containers/QuestionContainer/QuestionContainer";
import { Route } from "react-router-dom";
import Aux from "./hoc/Aux/Aux";

class App extends Component {
	render() {
		return (
			<Aux>
				<Navbar />
				<Route path="/" component={QuestionContainer} />
			</Aux>
		);
	}
}

export default App;

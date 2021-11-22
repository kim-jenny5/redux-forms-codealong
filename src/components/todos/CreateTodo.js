import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
	state = { text: "" };

	handleChange = (e) => {
		this.setState({ text: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
		// console.log(this.props);
		// console.log(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Add todo"
						onChange={this.handleChange}
						value={this.state.text}
					></input>
					<input type="submit"></input>
				</form>
				{this.state.text}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData })
	};
};

export default connect(null, mapDispatchToProps)(CreateTodo);

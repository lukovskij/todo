import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { addTodo } from '../actions'


const ENTER_KEY = 13;

class AddTodo extends Component{
	state = {
		text : ''
	}
	handleTextChange = (e) => {
     this.setState({
			 text : e.target.value
		 })

	}
	handleOnKeyDown = (e) => {

     if(e.keyCode === ENTER_KEY){

			this.props.todoAdd(this.state.text)

			 this.setState({
				 'text' : ''
			 })
		 }

	}

	render() {
		return (
				<div className="field">
					<label className="label">Todo Message</label>
					<div className="control">
					<input
							className='input'
							type="text"
							placeholder="What needs to be done"
							value={this.state.text}
							onChange={this.handleTextChange}
							onKeyDown={this.handleOnKeyDown}
		      />
					</div>
				</div>
		)
	}
}

function matchDispatchToProps(dispatch){
	return {
		todoAdd : bindActionCreators(addTodo, dispatch)
	}
}

function mapStateToProps(state){
	return {
		todos : state.todo
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(AddTodo)

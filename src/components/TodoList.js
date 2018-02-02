import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions'

import Todo from './Todo';

class TodoList extends Component {

   render() {
		 let { todo } = this.props;
console.log(todo);
		 return(
			 <div className="base">
			    {
						todo ?
						todo.map(item => (
							<Todo
							key={item.id}
              id={item.id}
							text={item.text}
							complated={item.complated}
              parentToggle={this.props.toggleTodo}
						/>
						))
						: <div> empty </div>
					}
			 </div>
		 )
	 }
}

function mapStateToProps(state){
	 return {
	    todo : state.todo
	 }
}
// function matchDispatchToProps(dispatch){
//   return {
//     toggleTodo : bindActionCreators(toggleTodo, dispatch)
//   }
// }

export default connect(mapStateToProps, {toggleTodo})(TodoList)

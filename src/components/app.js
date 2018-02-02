import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

import store from '../store'

export default class App extends Component {
    render(){
        return (
				<Provider store={store}>

					<div className="container">
					<h1 className="title"> TODO </h1>
						<div className="box">
						<div className="media-content">
							 <div className="content">
							 <AddTodo></AddTodo>
							 <TodoList></TodoList>
							 </div>
						</div>
						</div>
					</div>

					</Provider>
        )
    }
}
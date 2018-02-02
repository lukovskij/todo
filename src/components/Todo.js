import React, { Component } from 'react'

export default class Todo extends Component {

    toggleTodo = () => {
      this.props.parentToggle(this.props.id)
    }

    render(){
       const { text, complated} = this.props;

        return (
						<div className="card" onClick={this.toggleTodo}>
							<div className={complated ? 'card-content hero is-warning' : 'card-content'}>
								<div className="content">
									<p>
									{text}
									</p>
								</div>
							</div>
            </div>
        )
    }
}

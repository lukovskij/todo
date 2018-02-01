import React, { Component } from 'react'

export default class Todo extends Component {
    render(){
       const { text, complated, onToggle } = this.props;

        return (
						<div className="card">
							<div className="card-content">
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
import React, {Component} from 'react';

export default class FilterLink extends Component {

  render() {

    const {active, children, onClick} = this.props;

    //render if button active
    if (active)
      return (
        <li className="is-active">
          <a>
            {children}
          </a>
        </li>
      )

    return (
      <li>
        <a>
          {children}
        </a>
      </li>
    )
  }
}

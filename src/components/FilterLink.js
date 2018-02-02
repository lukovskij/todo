import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions'


class FilterLink extends Component {

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

function mapStateToProps(dispatch, ownProps){
  return {
    onClick : () => dispatch(setFilter(ownProps.filter))
  }
}

export default connect(null, mapStateToProps)()

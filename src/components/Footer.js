import React, {Component} from 'react';

import FooterLink from './FilterLink';

export default class Footer extends Component {
  render() {

    return (<div className="tabs">
      <ul>
        <FooterLink>All</FooterLink>
        <FooterLink>New</FooterLink>
        <FooterLink>Complated</FooterLink>
      </ul>
    </div>)

  }
}

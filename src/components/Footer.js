import React, {Component} from 'react';

import FooterLink from './FilterLink';

export default class Footer extends Component {
  render() {

    return (<div className="tabs">
      <ul>
        <FooterLink filter="SHOW_ALL">All</FooterLink>
        <FooterLink filter="SHOW_NEW">New</FooterLink>
        <FooterLink filter="SHOW_COMPLATED">Complated</FooterLink>
      </ul>
    </div>)

  }
}

import React, { Component } from "react"
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app'

import './assets/bulma.css'


ReactDOM.render(
   <App></App>,
    document.getElementById('app')
)
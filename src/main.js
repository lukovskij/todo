import React, { Component } from "react"
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'




ReactDOM.render(
   <App></App>,
    document.getElementById('app')
)
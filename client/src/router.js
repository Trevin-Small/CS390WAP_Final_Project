import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Home } from "./pages/home"

export default () => (
  <Router>
    <App>
      <Route exact path='/' children={({ ...props }) => {
        return <Home {...props} />
      }} />
    </App>
  </Router>
)
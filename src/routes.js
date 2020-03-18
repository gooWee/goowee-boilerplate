import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Example from './containers/Example'

export default (
  <Switch>
    <Route exact path={'/'} component={Example} />
  </Switch>
)

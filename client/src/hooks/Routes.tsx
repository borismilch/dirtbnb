import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home, SearchPage } from '../views'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route >
          <Redirect to='/' />
        </Route>
        
      </Switch>
    </>
  )
}

export default Routes

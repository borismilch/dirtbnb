import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Home, SearchPage, Profile, Detail, AddHost, UserPage } from '../views'

import { useContext } from 'react'

import { IStore, StoreContext } from '../App'

import { observer } from 'mobx-react-lite'

const Routes = () => {

  const { auth } = useContext<IStore>(StoreContext)

  return (
    <> 
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route exact path="/add_host">
          <AddHost />
        </Route>

        <Route exact path="/prof/:id">
          <UserPage />
        </Route>

        <Route exact path="/detail/:id">
          <Detail />
        </Route>

      
        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route >
          <Redirect to='/' />
        </Route>
        
      </Switch>

    </>
  )
}

export default observer(Routes)

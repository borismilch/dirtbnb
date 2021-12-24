import { observer } from 'mobx-react-lite';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './hooks/Routes'
import UserStore from './store/userStore';

import AuthStore from './store/userStore'

import { createContext } from 'react'

import { Auth0Provider } from '@auth0/auth0-react'

const auth = new AuthStore()

export interface IStore  {
  auth: typeof auth
}

export const StoreContext = createContext<IStore>({auth})

const App = () => {
  return (
    <StoreContext.Provider  value={{auth}}>
  
      <Router>
        <Routes />
      </Router>

    </StoreContext.Provider>
 
  );
};

export default observer(App);

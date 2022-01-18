import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import {Admin, Resource} from 'react-admin';
import initStore from '../state';
//import { googleAPIAuthProvider, googleSheetsDataProvider } from 'ra-data-google-sheets';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '../components/admin/authProvider';

import Home from './Home';
import LoginPage from './Login/loginPage';

import GsSyncer from '../state/gs/updater';

//import CryptoEntities, {CryptoECreate, CryptoEEdit} from '../components/admin/cryptoentities';
// const dataProvider = googleSheetsDataProvider("1ZoxqPw-JVqWes54FHlTCiXN7sHebiu_2_cdMgzh2lqg");
// const authProvider = googleAPIAuthProvider();

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const history = createHashHistory();

function Updaters(){
  return (
    <>
      <GsSyncer/>
    </>
  )
}
function App() {

  return (
    <Provider store={initStore({
        authProvider,
        dataProvider,
        history,
      })}>

        <Router basename={process.env.PUBLIC_URL}>
          <Updaters/>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/admin">
              <Admin 
                loginPage={LoginPage} 

                authProvider={authProvider} 
                dataProvider={dataProvider} 
                history={history}
                title="Crypto Dash Admin"
                >

                <Resource name='crypto-entities'
                  />
              </Admin>
            </Route>

          </Switch>
        </Router>

    </Provider>
  );
}

export default App;

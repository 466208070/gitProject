import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';

const store  = '123'

function Erying(){
    return <h1>二營</h1>
}
function Qibingying(){
    return <h1>騎兵連</h1>
}

function App() {
  return (
//  <Provider store={store}>
        <BrowserRouter>
//          <div>
//              <ul>
//                  <li>
//                      <Link to='/'>一營</Link>
//                  </li>
//                  <li>
//                      <Link to='/erying'>二營</Link>
//                  </li>
//                  <li>
//                      <Link to='/qingbinglian'>騎兵連</Link>
//                  </li>
//              </ul>
//              <Switch>
////                  <Route path='/' exact component={App}></Route>
//                  <Route path='/erying' component={Erying}></Route>
//                  <Route path='/qingbinglian' component={Qibingying}></Route>
//                  {/* <Redirect to='/qishi'></Redirect> */}
//              </Switch>

            </div>
        </BrowserRouter>
//  </Provider>
  );
}

export default App;

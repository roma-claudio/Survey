import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartPage from './startPage';
import Step from './step';
import EndPage from './endPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/step">
          <Step/>
        </Route>
        <Route path="/endScreen">
          <EndPage/>
        </Route>
        <Route>
          <StartPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
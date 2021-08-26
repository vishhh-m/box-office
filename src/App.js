import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Navs from "./components/Navs";
import Starred from './pages/Starred';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navs />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/starred"><Starred /> </Route>
      <Route>Not Found</Route>
    </Switch>
    </div>
  );
}

export default App;

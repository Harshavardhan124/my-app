import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import CharactersList from './Components/CharactersList'
import NotFound from './Components/NotFound'
import CharacterDetails from './Components/CharacterDetails'

import './App.css';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/' component={CharactersList}/>
      <Route path='/characters/:id' component={CharacterDetails}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default App;

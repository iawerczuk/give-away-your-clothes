import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component= {Home}/>
        <Route exact path='/logowanie' component={LogIn}/>
        <Route exact path='/rejestracja' component={Register}/>
        <Route exact path='/wylogowano' component={LogOut}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
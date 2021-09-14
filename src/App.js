import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DefaultLayout from './DefaultLayout';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <DefaultLayout />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

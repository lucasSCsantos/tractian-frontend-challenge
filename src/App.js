import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './context/DataProvider';
import DefaultLayout from './DefaultLayout';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <DefaultLayout />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

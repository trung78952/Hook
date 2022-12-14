import logo from './logo.svg';
import './App.scss';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import AddnewProduct from './components/AddnewProduct';
import User from './components/Products/User';
import Covid from './components/Covid';
import Detailuser from './components/Products/Detailuser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="App-header">
        <Nav />
          <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
          <Switch>
            <Route path="/" exact={true}>
              <TodoList />
            </Route>
            <Route path="/addnew">
              <div className='add'>
                <AddnewProduct />
              </div>
            </Route>
            <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/covid">
              <Covid />
            </Route>
            <Route path="/user/:id">
              <Detailuser />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

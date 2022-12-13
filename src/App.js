import logo from './logo.svg';
import './App.scss';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import AddnewProduct from './components/AddnewProduct';
import Product from './components/Products/Products';
import Covid from './components/Covid';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
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
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/covid">
              <Covid />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;

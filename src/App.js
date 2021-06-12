import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/posts/:id'>
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

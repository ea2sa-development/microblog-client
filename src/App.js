import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/posts/new" component={PostCreate} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;

import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Post from "./containers/Post";
import Posts from "./containers/Posts";
import CreatePost from "./containers/CreatePost";
import CustomRoute from "./components/CustomRoute";

function App() {
  return (
    <Router>
      <Switch>
        <CustomRoute path={'/'} exact Component={Posts} />
        <CustomRoute path={'/posts/:postId'} exact Component={Post} />
        <CustomRoute path={'/new-post'} exact Component={CreatePost} />
      </Switch>
    </Router>
  );
}

export default App;

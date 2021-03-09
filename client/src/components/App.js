import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from "./streams";
import history from '../history'

/*The important thing to remember about Link is it servers as an anker tag
<a href> to announce a URL. The difference is Link won't make a complete new
request eliminating all data of previous requests. It prevents a page from 
being reloaded making a navigation experience efficient. It's a kind of a SPA
(Single Page Application) in which we imitate navigation by hiding and showing
components rather than actually reload each page.
<BrowserRouter> has been changed by <Router> - it's needed to implement a
programmatic navigation. We pass history function in as props. Once it's set
a push() method would be available to redirect a user to a particular route
There is unexpected behaviour in routes. Colon in /streams/:id is greedy
and wants to match everything (not just numbers). A content relating to a 
unrelated route appears in the screen since /streams/new is considered as a
part of matched route. All routes are wrapped in <Switch> which helps to
solve the conflict.*/

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
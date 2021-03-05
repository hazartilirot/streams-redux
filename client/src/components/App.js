import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Header'
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from "./streams";

/*The important thing to remember about Link is it servers as an anker tag
<a href> to announce a URL. The difference is Link won't make a complete new
request eliminating all data of previous requests. It prevents a page from 
being reloaded making a navigation experience efficient. It's a kind of a SPA
(Single Page Application) in which we imitate navigation by hiding and showing
components rather than actually reload each page.*/

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;

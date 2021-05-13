import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import ErrorBoundary from "./components/ErrorBoundary";
import store from "./store/store"
import {Provider} from "react-redux";
import Wishlist from "./pages/Wishlist/Wishlist";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
      <div className="App">
          <Provider store={store}>
              <ErrorBoundary>
                  <Router>
                      <Switch>
                          <Route exact path="/">
                              <Home/>
                          </Route>
                          <Route exact path="/wishlist">
                              <Wishlist/>
                          </Route>
                          <Route exact path="/movies/:id" children={<Movies/>}/>
                          <Route path="*">
                              <NotFoundPage/>
                          </Route>
                      </Switch>
                  </Router>
              </ErrorBoundary>
          </Provider>
      </div>
  );
}

export default App;

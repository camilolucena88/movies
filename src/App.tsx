import React, {useState} from 'react';
import './App.css';
import {Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import ErrorBoundary from "./components/ErrorBoundary";
import store from "./store/store"
import {Provider} from "react-redux";
import Wishlist from "./pages/Wishlist/Wishlist";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ProtectedRoute, {ProtectedRouteProps} from "./components/Auth/PrivateRoute";
import {history} from "./helpers/history";

function App() {
    const defaultProtectedRouteProps: ProtectedRouteProps = {
        authenticationPath: '/login',
    };

    return (
      <div className="App">
          <Provider store={store}>
              <ErrorBoundary>
                  <Router history={history}>
                      <Switch>
                          <Route exact path="/">
                              <Home/>
                          </Route>
                          <ProtectedRoute
                              {...defaultProtectedRouteProps}
                              exact={true}
                              path="/wishlist"
                              component={Wishlist}
                          />
                          <Route exact path="/movies/:id" children={<Movies/>}/>
                          <Route exact path="/register" children={<Register/>}/>
                          <Route exact path="/login" children={<Login/>}/>
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

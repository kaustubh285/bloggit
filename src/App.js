import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className='container mb-6'>
        <NavBar />
        <div className='bg-secondary App mt-2'>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/articles-list' exact component={ArticleListPage} />
            <Route path='/article/:name' exact component={ArticlePage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

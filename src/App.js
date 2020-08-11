import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleList from "./pages/ArticleList";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className='container mb-6'>
        <NavBar />
        <div className='bg-info App mt-2'>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/articles-list' exact component={ArticleList} />
          <Route path='/article' exact component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;

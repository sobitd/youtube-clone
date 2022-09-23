import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/">
            <div className="mainpage">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

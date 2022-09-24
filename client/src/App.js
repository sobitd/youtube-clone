import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainpage">
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;

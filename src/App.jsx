import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

function App() {
  const [watchLaterList, setWatchLaterList] = useState(() => {
    const stored = sessionStorage.getItem("watchLater");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  const [likedVideos, setLikedVideos] = useState(() => {
    const saved = sessionStorage.getItem("likedVideos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("likedVideos", JSON.stringify(likedVideos));
  }, [likedVideos]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar watchLaterCount={watchLaterList.length} />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  watchLaterList={watchLaterList}
                  setWatchLaterList={setWatchLaterList}
                  likedVideos={likedVideos}
                  setLikedVideos={setLikedVideos}
                />
              }
            />
            <Route
              path="/watch-later"
              element={
                <WatchLater
                  watchLaterList={watchLaterList}
                  setWatchLaterList={setWatchLaterList}
                  likedVideos={likedVideos}
                  setLikedVideos={setLikedVideos}
                />
              }
            />
          </Routes>
        </div>
        <footer className="bg-gray-100 text-center text-gray-500 py-3">
          © 2025 Shreeram Jadhav
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

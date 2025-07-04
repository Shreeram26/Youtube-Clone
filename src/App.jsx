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
                />
              }
            />
            <Route
              path="/watch-later"
              element={
                <WatchLater
                  watchLaterList={watchLaterList}
                  setWatchLaterList={setWatchLaterList}
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

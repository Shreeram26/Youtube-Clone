import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ watchLaterCount }) => {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem("siteTimer");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;
        sessionStorage.setItem("siteTimer", next);
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MiniTube</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 rounded text-black"
        />
        <Link to="/watch-later" className="underline">
          Watch Later ({watchLaterCount})
        </Link>
        <span className="text-sm">{seconds} sec on site</span>
      </div>
    </div>
  );
};

export default Navbar;

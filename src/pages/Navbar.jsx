import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ watchLaterCount }) => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex flex-wrap justify-between items-center shadow gap-4">
      <Link to="/" className="text-xl font-bold">MiniTube</Link>

      <input
        type="text"
        placeholder="Search"
        className="bg-white text-black px-3 py-1 rounded-md border border-gray-300 w-64 sm:w-96"
      />

      <Link to="/watch-later" className="text-sm underline">
        Watch Later ({watchLaterCount})
      </Link>
    </nav>
  );
};

export default Navbar;

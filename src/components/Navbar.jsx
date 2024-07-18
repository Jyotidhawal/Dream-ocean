import React from "react";
import "../css/navbar.css";
const Navbar = () => {
  // const navigate = useNavigate();

  const handleMenu = () => {
    // navigate("/menu");
  };

  return (
    <nav className="h-24 bg-zinc-700 text-xl flex justify-between items-center">
      <div className="flex gap-x-40 p-2 items-center text-white text-center m-auto align-middle">
        <div className="navbar font-serif hover:text-amber-200 cursor-pointer">About</div>
        <div className="navbar font-serif hover:text-amber-200 cursor-pointer">Contact</div>
        <div className="text-4xl dream_ocean text-amber-300">Dream Ocean</div>
        {/* <div className="navbar" onClick={handleMenu}>Menu</div> */}
        <div className="navbar font-serif hover:text-amber-200 cursor-pointer">
          Menu
        </div>
        <div className="navbar font-serif hover:text-amber-200 cursor-pointer">Reserve</div>
      </div>
    </nav>
  );
};

export default Navbar;

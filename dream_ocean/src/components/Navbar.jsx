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
        <div className="navbar font-serif">About</div>
        <div className="navbar font-serif">Contact</div>
        <div className="text-4xl dream_ocean">Dream Ocean</div>
        {/* <div className="navbar" onClick={handleMenu}>Menu</div> */}
        <div className="navbar font-serif">
          Menu
        </div>
        <div className="navbar font-serif">Reserve</div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = ({ active = "home" }) => {
  var otherPage =
    "bg-gray-300 hover:bg-gray-400 rounded px-2 text-white cursor-pointer";
  var activePage =
    "bg-blue-500 hover:bg-blue-600 rounded px-2 text-white cursor-pointer";
  return (
    <div class="flex flex-row w-full bg-gray-100 shadow-sm p-2">
      <div class="text-lg font-bold">WTH Self-Help</div>
      <div class="flex flex-row ml-auto self-center space-x-2">
        <a href="/">
          <div class={active === "home" ? activePage : otherPage}>Home</div>
        </a>
        <a href="/participants">
          <div class={active === "participants" ? activePage : otherPage}>
            Participants
          </div>
        </a>
        <div class={active === "groups" ? activePage : otherPage}>Groups</div>
        <div class={active === "loans" ? activePage : otherPage}>Loans</div>
        <div class={active === "consumables" ? activePage : otherPage}>
          Consumables
        </div>
        <div class="bg-red-500 hover:bg-red-600 rounded px-2 text-white cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;

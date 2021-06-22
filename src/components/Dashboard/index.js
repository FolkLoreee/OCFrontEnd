import React from "react";
import Navbar from "components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar active="home" />
      <div class="p-2">
        <span class="text-4xl font-bold">Dashboard</span>
        <div class="grid grid-cols-3">
          <div class="flex flex-col rounded-lg m-2 p-2 bg-gray-100">
            <span class="text-3xl font-medium">Participants</span>
            <span class="text-xl">Number of participants: 10</span>
            <a href="/participants">
              <div class="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 w-auto text-center">
                Search participants
              </div>
            </a>
          </div>
          <div class="flex flex-col rounded-lg m-2 p-2 bg-gray-100">
            <span class="text-3xl font-medium">Groups</span>
            <span class="text-xl">Number of groups: 10</span>
            <div class="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 w-auto text-center">
              Search groups
            </div>
          </div>
          <div class="flex flex-col rounded-lg m-2 p-2 bg-gray-100">
            <span class="text-3xl font-medium">Loans</span>
            <span class="text-xl">Number of loans: 10</span>
            <div class="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 w-auto text-center">
              Search loans
            </div>
          </div>
          <div class="flex flex-col rounded-lg m-2 p-2 bg-gray-100">
            <span class="text-3xl font-medium">Consumables</span>
            <span class="text-xl">Number of consumables: 10</span>
            <div class="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 w-auto text-center">
              Search consumables
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

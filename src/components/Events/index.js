import React from "react";

import Navbar from "components/Navbar";
import Header from "components/Header";
import DataRow from "./DataRow";

import { events } from "./mockData";

const Events = () => {
  return (
    <>
      <Navbar active="home" />
      <Header text="Upcoming Events" />
      <div class="max-w-7xl mx-auto pt-2">
        <div class="grid grid-cols-3 space-x-1 space-y-1 mr-1">
          {/* Header row */}
          <div class="bg-gray-300 text-center rounded ml-1 mt-1">Time</div>
          <div class="bg-gray-300 text-center rounded">Event Name</div>
          <div class="bg-gray-300 text-center rounded">Location</div>

          {/* Data */}
          {events.map((entry, index) => (
            <DataRow entry={entry} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;

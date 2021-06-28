import React, { useState, useEffect } from "react";

import ParticipantCard from "./ParticipantCard";
import Navbar from "components/Navbar";
import Header from "components/Header";

import { participantData } from "./mockData";

const Participants = () => {
  const [listOfParticipants, setListOfParticipants] = useState([]);
  const [filteredListOfParticipants, setFilteredListOfParticipants] = useState(
    []
  );

  useEffect(() => {
    setListOfParticipants(participantData.participants);
    setFilteredListOfParticipants(participantData.participants);
  }, []);

  function filterSearch(e) {
    if (e.target.value !== "") {
      let filtered = listOfParticipants.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredListOfParticipants(filtered);
    } else {
      setFilteredListOfParticipants(listOfParticipants);
    }
  }

  return (
    <>
      <Navbar active="home" />
      <Header text="Find Participants" />
      <div class="max-w-7xl mx-auto">
        <div class="flex p-2">
          <input
            name="search"
            onChange={filterSearch}
            class="flex w-screen rounded bg-gray-200 p-2 my-2"
            placeholder="John Doe"
          />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {filteredListOfParticipants.map((p) => (
            <ParticipantCard
              key={p.name}
              name={p.name}
              team={p.team}
              location={p.location}
              phone={p.phone}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Participants;

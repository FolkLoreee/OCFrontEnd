import React, { useState, useEffect } from "react";
import Navbar from "components/Navbar";
import ParticipantCard from "./ParticipantCard";

// mock data
import participantData from "mockData/participants";

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
      <Navbar active="participants" />
      <div class="flex flex-col p-2">
        <span class="text-4xl font-bold">Participants</span>
        <input
          name="search"
          onChange={filterSearch}
          class="rounded bg-gray-200 p-2 my-2"
          placeholder="John Doe"
        />
      </div>
      <div class="grid grid-cols-6">
        {filteredListOfParticipants.map((p) => (
          <ParticipantCard
            key={p.name}
            name={p.name}
            registered={p.registered}
          />
        ))}
      </div>
    </>
  );
};

export default Participants;

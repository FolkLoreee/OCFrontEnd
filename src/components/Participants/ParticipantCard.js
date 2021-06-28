import React from "react";

const ParticipantCard = ({ name, team, location, phone }) => {
  return (
    <div class="flex flex-col rounded-lg mx-2 my-1 p-2 bg-gray-100">
      <span class="text-lg font-semibold">{name ? name : "No name"}</span>
      <div class="flex flex-row">
        <div class="mb-1 font-medium">{team ? team : "No team"}</div>
        <div class="mb-1 font-medium ml-auto">
          {location ? location : "No location"}
        </div>
      </div>
      <div class="flex space-x-1">
        <div class="bg-green-400 hover:bg-green-500 rounded px-2 text-white text-center w-1/2">
          {phone ? phone : "No phone"}
        </div>
        <div class="bg-gray-200 hover:bg-gray-300 rounded w-1/2 text-center">
          View details
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;

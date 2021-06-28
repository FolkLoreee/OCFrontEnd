import React from "react";

const ParticipantCard = ({ name, registered }) => {
  var registeredClass =
    "bg-green-500 hover:bg-green-600 rounded px-2 text-white text-center w-1/2";
  var unregisteredClass =
    "bg-red-500 hover:bg-red-600 rounded px-2 text-white text-center w-1/2";
  return (
    <div class="flex flex-col rounded-lg m-2 p-2 bg-gray-100">
      <span class="text-lg mb-1">{name}</span>
      <div class="flex space-x-1">
        <div class={registered ? registeredClass : unregisteredClass}>
          {registered ? "Registered" : "Register"}
        </div>
        <div class="bg-gray-200 hover:bg-gray-300 rounded w-1/2 text-center">
          View details
        </div>
      </div>
    </div>
  );
};

export default ParticipantCard;

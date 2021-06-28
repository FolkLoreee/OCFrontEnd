import React from "react";

const DataRow = ({ entry, index }) => {
  if (index % 2 === 0) {
    return (
      <>
        <div class="text-center rounded  border-2">{entry.time}</div>
        <div class="text-center rounded border-2">{entry.name}</div>
        <div class="text-center rounded border-2">{entry.location}</div>
      </>
    );
  }

  return (
    <>
      <div class="bg-blue-50 text-center rounded  border-2">{entry.time}</div>
      <div class="bg-blue-50 text-center rounded border-2">{entry.name}</div>
      <div class="bg-blue-50 text-center rounded border-2">
        {entry.location}
      </div>
    </>
  );
};

export default DataRow;

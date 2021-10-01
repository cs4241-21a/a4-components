import React from "react";

const RaceTable = () => {
  return (
    <table class="table-auto w-full text-center" id="results-table">
      <tr>
        <th>Place</th>
        <th>Racer</th>
        <th>Team</th>
        <th>Total Time</th>
        <th>Number of Laps</th>
        <th>Fastest Lap</th>
        <th class="max-w-xs">Comments</th>
        <th>Average Lap Time</th>
        <th class="cursor-pointer">Remove</th>
      </tr>
    </table>
  );
};

export default RaceTable;

import React from "react";

function Schedule({ schedule }) {
  const list = schedule.map((item) => (
    <tr>
      <td>{item.time}</td>
      <td>{item.description}</td>
    </tr>
  ));

  return (
    <table>
      <tr>
        <th>time</th>
        <th>description</th>
      </tr>
      {list}
    </table>
  );
}

export default Schedule;

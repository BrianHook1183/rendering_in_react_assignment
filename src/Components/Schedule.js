import React from "react";

function Schedule({ schedule }) {
  const list = schedule.map(({time, description}, index) =>(
    <tr key={index}>
    <td>{time}</td>
    <td>{description}</td>
    </tr>
))
return(
<table style={{"border": "1px solid black"}}><tbody>{list}</tbody></table>
)
}

export default Schedule;

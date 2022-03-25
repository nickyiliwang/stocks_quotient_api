import React from "react";

export default function RenderList({ data }) {
  return (
    <div>
      {data.map(({ Close, Date, High, Low, Open, Volume }, i) => {
        return (
          <ul key={i}>
            <li>Close: {Close}</li>
            <li>Date: {Date}</li>
            <li>High: {High}</li>
            <li>Low: {Low}</li>
            <li>Open: {Open}</li>
            <li>Volume: {Volume}</li>
          </ul>
        );
      })}
    </div>
  );
}

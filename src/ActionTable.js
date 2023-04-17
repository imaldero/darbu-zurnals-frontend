import { useState, useEffect, useRef } from "react";
import "./style.css";

function ActionTable() {
  const [actionData, setActionData] = useState([]);
  useEffect(() => {
    const getActionData = async function () {
      const response = await fetch(
        `https://rigorous-thundering-rifle.glitch.me/action`
      );
      const data = await response.json();
      console.log(data);
      setActionData(data);
    };
    getActionData();
  }, []);

  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>USER</th>
            <th>ISSUE ID</th>
          </tr>
        </thead>
        <tbody>
          {actionData.map((e) => {
            const oridate = e.date;
            const modifiedDate = oridate.slice(0, 10).replaceAll(`-`, `/`);
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.id_status}</td>
                <td>{modifiedDate}</td>
                <td>{e.time}</td>
                <td>{e.id_user}</td>
                <td>{e.id_report}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ActionTable;

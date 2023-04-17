import { useState, useEffect, useRef } from "react";
import "./style.css";

function Table() {
  const [issueData, setissueData] = useState([]);
  const getIssueData = async function () {
    const response = await fetch(
      `https://rigorous-thundering-rifle.glitch.me/issue`
    );
    const data = await response.json();
    setissueData(data);
  };
  useEffect(() => {
    getIssueData();
  }, []);

  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>USER</th>
            <th>SOURCE</th>
            <th>NAME</th>
            <th>OBJECT</th>
            <th>DEVICE</th>
            <th>TYPE</th>
            <th>NOTE</th>
          </tr>
        </thead>
        <tbody>
          {issueData.map((e) => {
            const oridate = e.date;
            const modifiedDate = oridate.slice(0, 10).replaceAll(`-`, `/`);
            return (
              <tr>
                <td>{e.id}</td>
                <td>{modifiedDate}</td>
                <td>{e.time}</td>
                <td>{e.id_user}</td>
                <td>{e.id_source}</td>
                <td>{e.name}</td>
                <td>{e.id_obj}</td>
                <td>{e.id_device}</td>
                <td>{e.id_type}</td>
                <td>{e.note}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import React from "react";
import { useState } from "react/cjs/react.development";
import "../css/style.css";
export const Dashboard = (props) => {
  return (
    <div className="wrapper">
      <h1>DataBase for patiants</h1>
      <p>Add and view your patinats using local storage</p>
      <div className="main">
        <div className="form-container">{/*  */}</div>

        <div className="view-container">
          {JSON.parse(localStorage.getItem("dashboard")).length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID_Patinat</th>
                      <th>Patinat</th>
                      <th>Patinat_ID</th>
                      <th>Age</th>
                      <th>saved</th>
                      <th>Vaccin</th>
                      <th>state</th>
                    </tr>
                  </thead>
                  <tbody>
                    {JSON.parse(localStorage.getItem("dashboard")).map(
                      (patinat) => {
                        return (
                          <Row
                            id={patinat.id}
                            name={patinat.name}
                            age={patinat.age}
                            isSaved={patinat.isSaved}
                            isVaccin={patinat.isVaccin}
                            idN={patinat.idN}
                            state={patinat.state}
                          />
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {JSON.parse(localStorage.getItem("dashboard")).length < 1 && (
            <div>No patinats are added yet</div>
          )}
        </div>
      </div>
    </div>
  );
  //   return
};

function Row(props) {
  const [state, setState] = useState(props.state);
  console.log(state);

  return (
    <>
      <tr id="da" key={props.id} className={state}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.idN}</td>
        <td>{props.age}</td>
        <td>{props.isSaved}</td>
        <td>{props.isVaccin}</td>

        <td>
          <select
            name="cars"
            id="patiant"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          >
            <option value="none">none</option>
            <option value="Critical">Critical</option>
            <option value="Emergency">Emergency</option>
            <option value="Urgent">Urgent</option>
            <option value="Semi-Urgent">Semi-Urgent</option>
          </select>
          <br></br>
        </td>
      </tr>
    </>
  );
}

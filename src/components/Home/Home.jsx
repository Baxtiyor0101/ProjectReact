import React from "react";
import "../Home/home.css";
import rasm from "../../img/maqbara.jpg";

export function Home(props) {
  // const {}=props

  console.log(props);
  const { name, familya, age } = props;
  return (
    <div>
      <table className="table" border={"1px"}>
        <thead>
          <tr>
            <th>ism</th>
            <th>familya</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "red" }}>{name}</td>
            <td>{familya}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
      <img src={rasm} alt="" />
    </div>
  );
}

import React, { useState } from "react";
import "./style.css";

function Usestate() {
  const [name, setName] = useState("Jasurbek");
  const [title, setTitle] = useState("ishsiz");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(20);
  //   console.log(useState());
  console.log(name);
  const onHendle = () => {
    setNumber(number + 1);
    setAge(age + 2);
    setName("homid");
    setTitle("IT");
  };
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>name</th>
            <th>title</th>
            <th>number</th>
            <th>age</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{title}</td>
            <td>{number}</td>
            <td>{age}</td>
            <td>
              <button onClick={() => onHendle()}>change</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Usestate;

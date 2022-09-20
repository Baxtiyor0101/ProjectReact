import React from "react";
// import { data } from "../../mock/data";

function Map(props) {
  console.log(props.value);
  const { values } = props;

  return (
    <div>
      {values.map((val, index) => (
        <div key={val.id}>
          <ul>
            <li>
              {val.id}
              {"  "}
              {val.names}
              {"  "}
              {val.title}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Map;

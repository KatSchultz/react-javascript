import React, { useEffect, useState } from "react";
import { getColors } from "../services/api.service";
import "./ColorCall.css";

export default function ColorCall() {
  const [colorData, setColorData] = useState([]);

  useEffect(() => {
    getColors().then((response) => {
      //   console.log(response);
      setColorData(response.data.records);
      return response;
    });
  }, []);

  return (
    <div className="colors">
      <h2> Making Color Call Here</h2>
      <div className="container">
        {colorData.map((color) => (
          <div className="color-holder" key={color.colorid}>
            <h3>{color.name}</h3>
            <div
              className="color-square"
              style={{
                backgroundColor: `${color.hex}`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

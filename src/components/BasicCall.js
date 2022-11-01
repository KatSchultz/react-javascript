import React, { useEffect, useState } from "react";
import { callApi } from "../services/api.service";

export default function BasicCall() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    callApi().then((response) => {
      setArt(response.data.records);
      //   console.log(response);
      return response;
    });
  }, []);

  return (
    <div>
      <h1>Making Call Here</h1>
    </div>
  );
}

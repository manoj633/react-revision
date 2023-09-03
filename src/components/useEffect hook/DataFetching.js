import React, { useState, useEffect } from "react";

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <div>
      <h1>Data fetching example</h1>
      {data ? <p>{data.title}</p> : <p>Data loading.....</p>}
    </div>
  );
}

export default DataFetching;

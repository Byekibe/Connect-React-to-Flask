// To use useState and usesEffect import it from reat library
import { useState, useEffect } from "react";

export default function App() {
  // States are very important React objects for modifying the UI. We initialize it as an empty array as shown
  const [data, setData] = useState(null);

  // How to use useEffect hook to fetch data when component first loads
  useEffect(() => {
    // Creating an async function fetchData
    const fetchData = async () => {
      // we proxy passed "http://localhost:5020" therefore a "/" means we are fetching data from the URL proxied
      const res = await fetch("/api");
      const data = await res.json();

      // Saving data to the state we created using the function setData
      setData(data);
    };

    // call fetchData function
    fetchData();
  }, []);

  return (
    <>
      <h1>React App</h1>
      {/* Display the data */}
      {data === null ? (
        "Loading..."
      ) : (
        <div>
          {data && "Age:"}
          {data.ages?.map((age) => (
            <div key={age}>{age}</div>
          ))}
          {data && "Names:"}
          {data.names?.map((name) => (
            <div key={name}>{name}</div>
          ))}
          {data && "heights:"}
          {data.heights?.map((height) => (
            <div key={height}>{height}</div>
          ))}
        </div>
      )}
    </>
  );
}

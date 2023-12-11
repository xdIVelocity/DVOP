import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const DataComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dog-api.kinduff.com/api/facts"
      );
      if (!response.ok) {
        setError("Error fetching data");
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await response.json();
      setData(data);
      console.log(data)
    } catch (error) {
      console.log("error", error);
      setError("Error request");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
   fetchData();
  }, 
  []);
  if (loading === true) {
    return <p>Načítání dat</p>;
  }
  if (error) {
    return (
      <p
        style={{
          backgroundColor: "red",
        }}
      >
        Error
      </p>
    ); 
  }
  
  function submit(){    
    fetchData()
  }
  return (
    <>
      <h1>Random dog fact</h1>
      <div>
          {data.facts.map((item) => (
            <p key={item}>{item}</p>
          ))}
        
      </div>
      <button onClick={submit}>
        Refresh (new dog fact)
      </button>
    </>
  );
};
export default DataComponent;
import { useState } from "react";
import { useEffect } from "react";
const DataComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      console.log("start fetchData fx");
      try {
        // Zde načti data z REST API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("after fetch");
        // Vypiš response do konzole
        // console.log("response", response);
        // Pokud je dotaz neúspěšný, nastav error
        if (!response.ok) {
          setError("Error fetching data");
          // return ukončí funkci
          return;
        }
        // počkej 2s pro DEV účely
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("after wait 2s");
        // Převeď data na json
        const data = await response.json();
        console.log("After json()");
        // console.log("data", data);
        // Nastav data do statu
        setData(data);
      } catch (error) {
        console.log("error", error);
        setError("Error request");
      } finally {
        setLoading(false);
      }
    };
    // 1
    console.log("Data component mounted");
    // 2
    fetchData();
    // 3
    console.log("after call fetchData");
  }, []);
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
  return (
    <div>
      <h1>JS Async - CSR</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width:"400px"
        }}
      >
        {data.map((item) => (
          <p key={item.id}>{item.body}</p>
        ))}
      </div>
    </div>
  );
};
export default DataComponent;
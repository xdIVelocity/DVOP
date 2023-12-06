import { useEffect, useState } from "react";

const DataComponent = () => {
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
    console.log("Data component mounted");
    const fetchData = async () => {
        try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.ok) {
            const data = await response.json();
            setData(data);
            setError(null);
        }
        const data = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(data);
        setError(null);}
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }}

return (
    <>
    <p>{loading ? "Loading true" : "Loading false"}</p>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <p>{error}</p>
    </>
);
}


export default DataComponent;
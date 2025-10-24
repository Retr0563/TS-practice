import { useState, useEffect } from "react";

type Props = {
  id: number;
  quote: string;
  author: string;
};

const MyEffect = () => {
  const [data, setData] = useState<Props>(null!);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes/4");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Famous Quote</h1>
          <p>ID: {data.id} </p>
          <h3>Quote: {data.quote} </h3>
          <h4>Author: {data.author} </h4>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default MyEffect;

import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Cards() {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return (
    <div className="xl:w-1/2 w-full flex flex-wrap gap-8">
      {fakeData.map((data) => {
        return <Card key={data.recipe_id} data={data} />;
      })}
    </div>
  );
}

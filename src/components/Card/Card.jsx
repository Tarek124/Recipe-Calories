/* eslint-disable react/prop-types */
import { useContext } from "react";
import frame1 from "../../assets/Frame.png";
import frame2 from "../../assets/Vector.png";
import { AppContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card({ data }) {
  const appData = useContext(AppContext);

  const handleCard = () => {
    const notify = () => toast.warn("Recipe Already added!");
    const checkCondition = appData.wantToCook.find(
      (i) => i.recipe_id === data.recipe_id
    );
    if (checkCondition) {
      notify();
    } else {
      appData.setWantToCook([...appData.wantToCook, data]);
    }
  };

  return (
    <div className="sm:w-[47%] w-full box-border p-4 border rounded-lg shadow-lg">
      <img className="rounded-md w-full" src={data.recipe_image} alt="" />
      <h1 className="my-4 font-semibold text-xl">{data.recipe_name}</h1>
      <p className="text-[#878787]">{data.short_description}</p>
      <div className="border-b my-4"></div>
      <h1 className="font-semibold">Ingredients: {data.ingredients.length}</h1>
      <ol className="list-disc list-inside pl-2 my-2">
        {data.ingredients.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ol>
      <div className="border-b my-4"></div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <img src={frame1} alt="" />
          <p className="text-[#878787]">{data.preparing_time}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={frame2} alt="" />
          <p className="text-[#878787]">{data.calories}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleCard()}
          className="btn btn-success rounded-3xl mt-6"
        >
          Want to Cook
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

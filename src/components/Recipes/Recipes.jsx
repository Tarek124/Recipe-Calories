import { useContext } from "react";
import { AppContext } from "../../App";

export default function Recipes() {
  const appData = useContext(AppContext);
  const handlePreparing = (i) => {
    // add Data to cooking
    appData.setCurrentlyCooking([...appData.currentlyCooking, i]);
    // remove Data from preparing
    const removeDataFromPreparing = appData.wantToCook?.filter(
      (item) => i.recipe_id !== item.recipe_id
    );
    appData.setWantToCook(removeDataFromPreparing);
  };

  let totalTime = 0;
  let totalCalories = 0;
  appData.currentlyCooking?.forEach((item) => {
    const time = parseInt(item.preparing_time?.slice(0, 2));
    const calories = parseInt(item.calories?.slice(0, 2));
    totalTime += time;
    totalCalories += calories;
  });

  return (
    <div className="xl:w-1/2 w-full rounded-lg border h-min py-4">
      <h1 className="text-4xl font-bold text-center my-4">
        Want to Cook: {appData.wantToCook?.length}
      </h1>
      <div className=" px-10 py-">
        <div className="border-t"></div>
      </div>
      <table className="w-full text-[#878787]">
        <tr className="mb-4">
          <th className="py-4"></th>
          <th className="py-4">Name</th>
          <th className="py-4">Time</th>
          <th className="py-4">Calories</th>
          <th className="py-4"></th>
        </tr>
        {appData.wantToCook?.map((i) => {
          return (
            <tr key={i.recipe_id} className="bg-[#7a7a7a22]">
              <td className="py-2 px-4 text-center">
                {appData.wantToCook.indexOf(i) + 1}
              </td>
              <td className="py-2 text-center">{i.recipe_name}</td>
              <td className="py-2 text-center">{i.preparing_time}</td>
              <td className="py-2 text-center">{i.calories}</td>
              <td className="py-2 px-2 text-center">
                {" "}
                <button
                  onClick={() => handlePreparing(i)}
                  className="btn btn-success rounded-3xl"
                >
                  Preparing
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      {/* Currently cooking: 02 */}
      <h1 className="text-4xl font-bold text-center my-8 mb-4">
        Currently cooking: {appData.currentlyCooking.length}
      </h1>
      <div className=" px-10 py-">
        <div className="border-t"></div>
      </div>
      <table className="w-full text-[#878787]">
        <tr className="mb-4">
          <th className="py-4"></th>
          <th className="py-4">Name</th>
          <th className="py-4">Time</th>
          <th className="py-4">Calories</th>
          <th className="py-4"></th>
        </tr>
        {appData.currentlyCooking?.map((i) => {
          return (
            <tr key={i.recipe_id} className="bg-[#7a7a7a22]">
              <td className="py-2 px-4 text-center">
                {appData.currentlyCooking.indexOf(i) + 1}
              </td>
              <td className="py-4 text-center">{i.recipe_name}</td>
              <td className="py-4 text-center">{i.preparing_time}</td>
              <td className="py-4 text-center">{i.calories}</td>
              <td className="py-4 px-2 text-center"></td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className="pt-4 text-center font-semibold">Total Time =</td>
          <td className="pt-4 text-center font-semibold">Total Calories = </td>
        </tr>{" "}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className=" text-center font-semibold">{totalTime} minutes</td>
          <td className="text-center font-semibold">
            {totalCalories} calories
          </td>
        </tr>
      </table>
    </div>
  );
}

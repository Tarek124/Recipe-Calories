import Cards from "../Cards/Cards";
import Recipes from "../Recipes/Recipes";

export default function Main() {
  return (
    <div className="w-full my-8">
      <div className="my-4">
        <h1 className="text-5xl font-bold text-center my-4">Our Recipes</h1>
        <p className="text-center">
          Feel free to customize the recipe according to your preferences or
          dietary restrictions. Enjoy cooking!
        </p>
      </div>
      <div className="flex gap-5 my-8 justify-center xl:flex-row flex-col xl:items-start items-center">
        <Cards />
        <Recipes />
      </div>
    </div>
  );
}

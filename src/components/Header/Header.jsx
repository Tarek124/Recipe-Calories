import bgImg from "./headerbg.png";


export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="xl:px-40 md:px-10 px-4 text-white w-full h-[600px] my-4 rounded-2xl flex flex-col justify-center items-center"
    >
      <h1 className="text-center font-bold xl:text-5xl text-2xl">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-center px-8 my-4">
        Consider what type of cuisine or cooking technique you&apos;re
        interested in learning. Whether it&apos;s mastering French pastries,
        perfecting sushi making, or exploring vegan cooking, identifying your
        interests will narrow down the search.
      </p>
      <div className="flex gap-4 my-4">
        <button className="btn btn-success rounded-3xl">Explore Now</button>
        <button className="btn text-white btn-outline rounded-3xl">
          Our Feedback
        </button>
      </div>
    </div>
  );
}

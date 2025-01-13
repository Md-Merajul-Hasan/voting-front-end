import { useLoaderData } from "react-router-dom";

const Vote = () => {
    const handleVoted =()=>{

    }
  const candidates_string = useLoaderData();
  const candidates = JSON.parse(candidates_string);
  console.log(candidates);
  return (
    <div>
      <section className="w-11/12 mx-auto mt-8 space-y-3">
        {candidates.map((candidate) => {
          return (
            <div className="w-11/12 h-[100px] mx-auto flex p-2 justify-center gap-5 items-center border-4 border-green-400 rounded-lg bg-yellow-200">
              <img
                className="w-1/3 h-[95px]"
                src={candidate.candidate_mark}
                alt=""
              />
              <button onClick={handleVoted} className="w-1/2 h-[95px] text-center bg-green-300 rounded-xl font-bold text-3xl hover:bg-green-700 hover:text-white">
                Vote
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Vote;

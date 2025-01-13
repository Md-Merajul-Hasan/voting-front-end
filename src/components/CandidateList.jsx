import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CandidateList = () => {
  const candidates_string = useLoaderData();
  const candidates = JSON.parse(candidates_string);
  console.log(candidates);

  const handleAddMore =()=>{

  }
  const handleStartVote = ()=>{
    
  }

  return (
    <div>
      <p className="text-center text-3xl font-bold text-blue-600">
        Candidates: {candidates.length}
      </p>
      <div className="w-11/12 mx-auto">
        {candidates.map((candidate) => {
          return (
            <div className="flex justify-around items-center space-y-12 ">
              <div className="w-28 h-24">
                <img src={candidate.candidate_photo} alt="" />
              </div>
              <div className="w-28 h-24">
                <img src={candidate.candidate_mark} alt="" />
              </div>
              <div className="text-start">
                <p className="text-2xl font-bold text-blue-600">
                  {candidate.candidate_name}
                </p>
                <p className="text-lg font-bold">{candidate.candidate_id}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleAddMore} className="btn btn-primary w-full m-4">
          <Link to='/addCandidate'>Add More Candidate</Link>
        </button>
        <button onClick={handleStartVote} className="btn btn-primary w-full m-4">
          <Link to='/vote'>Start Vote</Link>
        </button>
      </div>
    </div>
  );
};

export default CandidateList;

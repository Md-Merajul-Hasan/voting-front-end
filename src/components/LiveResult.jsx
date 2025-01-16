import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";

const LiveResult = () => {
  const { candidates, votes } = useContext(AuthContext);

  const calculatePercentage = (candidateId) => {
    const candidateVotes = Object.values(votes).filter(
      (vote) => vote === candidateId
    ).length;
    return (candidateVotes / Object.keys(votes).length) * 100;
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-3xl font-extrabold text-blue-600 mb-8">
            Live Voting Results
          </h1>
          <p className="text-center text-xl mb-8">
            Total Votes: <span className="font-bold">{Object.keys(votes).length}</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate) => (
              <div
                key={candidate.candidate_id}
                className="bg-white overflow-hidden shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      className="h-16 w-16 object-contain"
                      src={candidate.candidate_photo}
                      alt={`${candidate.candidate_name}'s photo`}
                    />
                    <div className="text-right">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {candidate.candidate_name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        ID: {candidate.candidate_id}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-blue-700">
                        Votes: {Object.values(votes).filter(vote => vote === candidate.candidate_id).length}
                      </span>
                      <span className="text-sm font-medium text-blue-700">
                        {calculatePercentage(candidate.candidate_id).toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${calculatePercentage(candidate.candidate_id)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveResult;
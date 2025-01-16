import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const CandidateList = () => {
  const { userdata } = useContext(AuthContext);


  if (!userdata) {
    return null;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-3xl font-extrabold text-blue-600 mb-8">
            Candidate List
          </h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div className="px-4 py-5 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-16 w-16 object-contain"
                      src={candidate.candidate_photo}
                      alt={candidate.candidate_name}
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {candidate.candidate_name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        ID: {candidate.candidate_id}
                      </p>
                    </div>
                  </div>
                  <img
                    className="h-12 w-12 object-contain"
                    src={candidate.candidate_mark}
                    alt={`${candidate.candidate_name}'s mark`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateList;

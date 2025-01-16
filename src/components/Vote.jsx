import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";

const Vote = () => {
  const {
    candidates,
    isVotingStarted,
    castVote,
    validateNID,
    registerUser,
    setRegisterUser,
    votedNID,
    setVotedNID,
  } = useContext(AuthContext);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [nid, setNid] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");
  const [isNIDValidated, setIsNIDValidated] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [registrationInfo, setRegistrationInfo] = useState({
    name: "",
    nid: "",
    password: "",
  });

  const handleNIDValidation = () => {
    if (validateNID == nid && !votedNID.includes(nid)) {
      setIsNIDValidated(true);
      setMessage("NID validated successfully. You can now vote.");
    } else {
      setMessage("Invalid NID. Please try again.");
    }
  };

  const handleVoted = (candidate) => {
    if (isNIDValidated && castVote(nid, candidate.candidate_id)) {
      setSelectedCandidate(candidate);
      setMessage(
        `You have successfully voted for ${candidate.candidate_name}.`
      );
      const updatedVotes = { ...votes };
      updatedVotes[nid] = candidate.candidate_id;
      setVotes(updatedVotes);
      setIsRegistered(false);
      setSkipped(false);
      setIsNIDValidated(false);
      setVotedNID([...votedNID, nid]); // Add the voted NID to the votedNID state
    } else {
      setMessage(
        "You have already voted or there was an error casting your vote."
      );
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const newRegistrationInfo = { name, nid, password };
    setRegistrationInfo(newRegistrationInfo);
    const newRegisterList = [...registerUser, registrationInfo];
    setRegisterUser(newRegisterList); // Update the registerUser state with the new registration info
    setIsRegistered(true);
    alert("Registration successful. You can now check your vote later.");
    form.reset();
  };

  if (!isVotingStarted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
            Voting is not yet started
          </h2>
          <p className="text-gray-600">
            Please wait for the admin to start the voting process.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-3xl font-extrabold text-blue-600 mb-8">
            Cast Your Vote
          </h1>
          {!isNIDValidated && (
            <div>
              <div className="mb-8">
                <input
                  type="text"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                  placeholder="Enter your NID"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleNIDValidation}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Validate NID
                </button>
              </div>
            </div>
          )}
          {!isRegistered && !skipped && isNIDValidated && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">
                Registration to check vote further
              </h2>
              <p className="mb-4">
                Register to check your vote later (optional)
              </p>
              <form onSubmit={handleRegistration} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={registrationInfo.name}
                  onChange={(e) =>
                    setRegistrationInfo({
                      ...registrationInfo,
                      name: e.target.value,
                    })
                  }
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  name="password"
                  value={registrationInfo.password}
                  onChange={(e) =>
                    setRegistrationInfo({
                      ...registrationInfo,
                      password: e.target.value,
                    })
                  }
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Register
                </button>
                <h2 className="my-3">Or</h2>
                <button
                  onClick={() => setSkipped(true)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Skip
                </button>
              </form>
            </div>
          )}
          {isNIDValidated && (isRegistered || skipped) && (
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
                        src={candidate.candidate_mark}
                        alt={`${candidate.candidate_name}'s mark`}
                      />
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          {candidate.candidate_name}
                        </h2>
                        <p className="text-sm text-gray-500">
                          ID: {candidate.candidate_id}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleVoted(candidate)}
                      className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        selectedCandidate === candidate
                          ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
                          : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                      }`}
                      disabled={selectedCandidate !== null}
                    >
                      {selectedCandidate === candidate ? "Voted" : "Vote"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {message && (
            <div
              className="mt-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md"
              role="alert"
            >
              <p className="font-bold">Status</p>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vote;

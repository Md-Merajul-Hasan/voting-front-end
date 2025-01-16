import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const { user, candidates, isVotingStarted, startVoting, stopVoting, logout, setIsAdmin } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return (
      <div className="text-center flex flex-col gap-4"><p className="text-red-600 text-lg">You are not Admin. Only Admin can access this page</p>
      <Link to='/'><button className="btn btn-primary hover:bg-green-900 bg-green-500 text-white font-bold">Go to Home</button></Link></div>
    );
  }
  const handleLogOut = () => {
    logout();
    setIsAdmin(false); //
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-3xl font-extrabold text-blue-600 mb-8">
            Admin Dashboard
          </h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Voting Status
              </h2>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Current status: {isVotingStarted ? "Started" : "Stopped"}</p>
              </div>
              <div className="mt-5">
                <button
                  onClick={isVotingStarted ? stopVoting : startVoting}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    isVotingStarted
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-green-600 hover:bg-green-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {isVotingStarted ? "Stop Voting" : "Start Voting"}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Candidate Management
              </h2>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Total candidates: {candidates.length}</p>
              </div>
              <div className="mt-5">
                <Link
                  to="/addCandidate"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add New Candidate
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Candidate List
              </h3>
              <ul className="mt-3 divide-y divide-gray-200">
                {candidates.map((candidate, index) => (
                  <li key={index} className="py-4 flex">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={candidate.candidate_photo}
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {candidate.candidate_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        ID: {candidate.candidate_id}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button onClick={handleLogOut} className="btn btn-primary my-4">
            Log Out Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const AddCandidate = () => {
  const { candidates, setCandidates, isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return (
      <div className="text-center flex flex-col gap-4">
        <p className="text-red-600 text-lg">
          You are not Admin. Only Admin can access this page
        </p>
        <Link to="/">
          <button className="btn btn-primary hover:bg-green-900 bg-green-500 text-white font-bold">
            Go to Home
          </button>
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const candidate_name = form.candidateName.value;
    const candidate_photo = form.candidatePhoto.value;
    const candidate_mark = form.candidateMark.value;
    const candidate_id = form.candidateId.value;
    const newCandidate = {
      candidate_name,
      candidate_photo,
      candidate_mark,
      candidate_id,
    };
    const updatedList = [...candidates, newCandidate];
    setCandidates(updatedList);
    form.reset();
    alert("Candidates updated");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add New Candidate
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="candidateName" className="sr-only">
                  Candidate Name
                </label>
                <input
                  id="candidateName"
                  name="candidateName"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Candidate Name"
                />
              </div>
              <div>
                <label htmlFor="candidatePhoto" className="sr-only">
                  Candidate Photo URL
                </label>
                <input
                  id="candidatePhoto"
                  name="candidatePhoto"
                  type="url"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Candidate Photo URL"
                />
              </div>
              <div>
                <label htmlFor="candidateMark" className="sr-only">
                  Candidate Mark URL
                </label>
                <input
                  id="candidateMark"
                  name="candidateMark"
                  type="url"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Candidate Mark URL"
                />
              </div>
              <div>
                <label htmlFor="candidateId" className="sr-only">
                  Candidate ID
                </label>
                <input
                  id="candidateId"
                  name="candidateId"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Candidate ID"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
              >
                Add Candidate
              </button>
              <Link to="/adminDashboard">
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;

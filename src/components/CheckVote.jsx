import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const CheckVote = () => {
  const [nid, setNid] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { votes, candidates, registeredUsers, loggedInUser, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(u => u.nid === nid && u.password === password);
    if (user) {
      login(user);
      setMessage('Login successful. You can now check your vote.');
    } else {
      setMessage('Invalid credentials. Please try again.');
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (!loggedInUser) {
      setMessage('Please login first to check your vote.');
      return;
    }
    const vote = votes[loggedInUser.nid];
    if (vote) {
      const candidate = candidates.find(c => c.candidate_id === vote);
      setMessage(`You have voted for ${candidate.candidate_name}.`);
    } else {
      setMessage('No vote found for your NID.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Check Your Vote
          </h2>
        </div>
        {!loggedInUser ? (
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="nid" className="sr-only">NID</label>
                <input
                  id="nid"
                  name="nid"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your NID"
                  value={nid}
                  onChange={(e) => setNid(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleCheck}>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Check Vote
              </button>
            </div>
          </form>
        )}
        {message && (
          <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckVote;
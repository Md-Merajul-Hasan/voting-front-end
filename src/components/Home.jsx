import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";

const Home = () => {
  const { user, login, isVoteActive, setIsVotingStarted, setIsAdmin } = useContext(AuthContext);
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (
      adminCredentials.username === "admin" &&
      adminCredentials.password === "admin123"
    ) {
      login({ username: adminCredentials.username, role: "admin" });
      setIsAdmin(true);
    } else {
      alert("Invalid admin credentials!");
    }
  };

  const handleStartVote = () => {
    if (user?.role === "admin") {
      setIsVotingStarted(true);
      navigate("/vote");
    } else {
      alert("Only admins can start the vote.");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the Election System
          </h1>

          {user?.role === "admin" ? (
            <div>
              <button
                onClick={handleStartVote}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {isVoteActive ? "Voting is Active" : "Start Voting"}
              </button>
              <br />
              <Link to="/adminDashboard" className="text-blue-500 mt-4 block">
                Go to Admin Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Admin Username"
                value={adminCredentials.username}
                onChange={(e) =>
                  setAdminCredentials({
                    ...adminCredentials,
                    username: e.target.value,
                  })
                }
                className="border px-4 py-2 rounded-md w-full"
                required
              />
              <input
                type="password"
                placeholder="Admin Password"
                value={adminCredentials.password}
                onChange={(e) =>
                  setAdminCredentials({
                    ...adminCredentials,
                    password: e.target.value,
                  })
                }
                className="border px-4 py-2 rounded-md w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
              >
                Admin Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

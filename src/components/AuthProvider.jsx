import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [isVotingStarted, setIsVotingStarted] = useState(false);
  const [votes, setVotes] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [registerUser, setRegisterUser] = useState([]);
  const [votedNID, setVotedNID] = useState([]);

  const validateNID = 123456789;

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Md-Merajul-Hasan/candidateList/refs/heads/main/candidates"
    )
      .then((res) => res.json())
      .then((data) => setCandidates(data))
      .catch((err) => alert(err.message));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const startVoting = () => {
    setIsVotingStarted(true);
  };

  const stopVoting = () => {
    setIsVotingStarted(false);
  };

  const castVote = (nid, candidateId) => {
    if (!votes[nid]) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [nid]: candidateId,
      }));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        setIsAdmin,
        login,
        logout,
        candidates,
        isVotingStarted,
        startVoting,
        stopVoting,
        votes,
        castVote,
        registerUser,
        setRegisterUser,
        validateNID,
        setCandidates,
        setIsVotingStarted,
        isVotingStarted,
        startVoting,
        stopVoting,
        votes,
        castVote,
        votedNID,
        setVotedNID,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

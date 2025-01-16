import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Voting App</Link>
        <ul className="flex space-x-4">
          <li><Link to="/vote" className="text-white hover:text-gray-300">Vote</Link></li>
          <li><Link to="/liveResult" className="text-white hover:text-gray-300">Live Result</Link></li>
          <li><Link to="/checkVote" className="text-white hover:text-gray-300">Check Your Vote</Link></li>
          <li><Link to="/adminDashboard" className="text-white hover:text-gray-300">Admin Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
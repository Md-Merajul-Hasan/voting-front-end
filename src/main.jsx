import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Vote from "./components/Vote";
import AddCandidate from "./components/AddCandidate";
import LiveResult from "./components/LiveResult";
import AuthProvider from "./components/AuthProvider";
import CheckVote from "./components/CheckVote";
import AdminDashboard from "./components/AdminDashboard";
import Private from "./components/routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/vote',
    element:
      <Vote></Vote>
  },
  {
    path: '/addCandidate',
    element: 
      <AddCandidate></AddCandidate>
  },
  {
    path: '/liveResult',
    element: <LiveResult></LiveResult>
  },
  {
    path: '/checkVote',
    element: <CheckVote></CheckVote>
  },
  {
    path: '/adminDashboard',
    element: 
      <AdminDashboard></AdminDashboard>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

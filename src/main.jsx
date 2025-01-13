import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Vote from "./components/Vote";
import Login from "./components/Login";
import AddCandidate from "./components/AddCandidate";
import CandidateList from "./components/CandidateList";
import LiveResult from "./components/LiveResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/vote',
    element: <Vote></Vote>,
    loader: ()=>
      fetch('https://raw.githubusercontent.com/Md-Merajul-Hasan/candidateList/refs/heads/main/candidates')
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/addCandidate',
    element: <AddCandidate></AddCandidate>
  },
  {
    path: '/candidateList',
    element: <CandidateList></CandidateList>,
    loader: () =>
      fetch('https://raw.githubusercontent.com/Md-Merajul-Hasan/candidateList/refs/heads/main/candidates')
  },
  {
    path: '/liveResult',
    element: <LiveResult></LiveResult>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

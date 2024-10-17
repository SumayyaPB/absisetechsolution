import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LoginComponent from "./Components/LoginComponent.jsx";
import SignupComponent from "./Components/SignupComponent.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage.jsx";
import CourseDetailed from "./Components/CourseDetailed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginComponent />,
      },
      {
        path: "/login",
        element: <SignupComponent />,
      },
      {
        path: "/courses",
        element: <HomePage/>,
      },
      {
        path: "/courses/:course",
        element: <CourseDetailed/>,
      }
    ] 
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

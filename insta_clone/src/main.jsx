import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ViewStory from "./ViewStory.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/story/:id/:tot",
    element: <ViewStory />,
    errorElement: <p>Story not found</p>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ViewStory from "./ViewStory.jsx";
import "./index.css";
import Profile from "./Profile.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/story/:id/:tot",
      element: <ViewStory />,
      errorElement: <p>Story not found</p>
    },
    {
      path: "/profile",
      element: <Profile />
    }
  ],
  {
    basename: "/Insta-Clone"   // 👈 important for GitHub Pages
  }
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
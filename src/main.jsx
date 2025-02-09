import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./components/pages/First.jsx";
import Second from "./components/pages/Second.jsx";
import Third from "./components/pages/Third.jsx";
import Fourth from "./components/pages/Fourth.jsx";
import Fifth from "./components/pages/Fifth.jsx";

const router = createBrowserRouter([
  {
    path: "/taraweeh",
    element: <App />,
  },
  {
    path: "/hb-yp",
    element: <First />,
  },
  {
    path: "/aasim",
    element: <Second />,
  },
  {
    path: "/wasim",
    element: <Third />,
  },
  {
    path: "/yoosuf",
    element: <Fourth />,
  },
  {
    path: "/shameer",
    element: <Fifth />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

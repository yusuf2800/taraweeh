import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./components/pages/First.jsx";
import Second from "./components/pages/Second.jsx";
import Third from "./components/pages/Third.jsx";
import Fourth from "./components/pages/Fourth.jsx";
import Fifth from "./components/pages/Fifth.jsx";
import Audios from "./components/pages/Audios.jsx";
import Alafsay from "./components/pages/Alafsay.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/audios",
    element: <Audios />,
  },
  {
    path: "/hb-yp",
    element: <First name="Hamzah/Yusuf" />,
  },
  {
    path: "/aasim",
    element: <Second name="Aasim" />,
  },
  {
    path: "/wasim",
    element: <Third name="Wasim" />,
  },
  {
    path: "/yoosuf",
    element: <Fourth name="Yoosuf" />,
  },
  {
    path: "/shameer",
    element: <Fifth name="Shameer" />,
  },
  {
    path: "/alafsay",
    element: <Alafsay />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

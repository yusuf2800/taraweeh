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
import Yasser from "./components/pages/Yasser.jsx";
import Juz1 from "./components/pages/Juz1.jsx";
import Juz2 from "./components/pages/Juz2.jsx";
import Juz3 from "./components/pages/Juz3.jsx";
import Juz4 from "./components/pages/Juz4.jsx";
import Juz5 from "./components/pages/Juz5.jsx";
import Juz6 from "./components/pages/Juz6.jsx";
import Juz7 from "./components/pages/Juz7.jsx";
import Juz8 from "./components/pages/Juz8.jsx";
import Juz9 from "./components/pages/Juz9.jsx";

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
    path: "/juz1",
    element: <Juz1 name="Juz 1" />,
  },
  {
    path: "/juz2",
    element: <Juz2 name="Juz 2" />,
  },
  {
    path: "/juz3",
    element: <Juz3 name="Juz 3" />,
  },
  {
    path: "/juz4",
    element: <Juz4 name="Juz 4" />,
  },
  {
    path: "/juz5",
    element: <Juz5 name="Juz 5" />,
  },
  {
    path: "/juz6",
    element: <Juz6 name="Juz 6" />,
  },
  {
    path: "/juz7",
    element: <Juz7 name="Juz 7" />,
  },
  {
    path: "/juz8",
    element: <Juz8 name="Juz 8" />,
  },
  {
    path: "/juz9",
    element: <Juz9 name="Juz 9" />,
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
    element: <Alafsay name="Alafsay" />,
  },
  {
    path: "/yasser",
    element: <Yasser />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

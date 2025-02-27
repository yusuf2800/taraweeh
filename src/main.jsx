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
import Juz1 from "./components/pages/juz/Juz1.jsx";
import Juz2 from "./components/pages/juz/Juz2.jsx";
import Juz5 from "./components/pages/juz/Juz5.jsx";
import Juz3 from "./components/pages/juz/Juz3.jsx";
import Juz4 from "./components/pages/juz/Juz4.jsx";
import Juz6 from "./components/pages/juz/Juz6.jsx";
import Juz7 from "./components/pages/juz/Juz7.jsx";
import Juz8 from "./components/pages/juz/Juz8.jsx";
import Juz9 from "./components/pages/juz/Juz9.jsx";
import Juz10 from "./components/pages/juz/Juz10.jsx";
import Juz11 from "./components/pages/juz/Juz11.jsx";
import Juz12 from "./components/pages/juz/Juz12.jsx";
import Juz13 from "./components/pages/juz/Juz13.jsx";
import Juz14 from "./components/pages/juz/Juz14.jsx";
import Juz15 from "./components/pages/juz/Juz15.jsx";
import Juz16 from "./components/pages/juz/Juz16.jsx";
import Juz17 from "./components/pages/juz/Juz17.jsx";
import Juz18 from "./components/pages/juz/Juz18.jsx";
import Juz19 from "./components/pages/juz/Juz19.jsx";
import Juz20 from "./components/pages/juz/Juz20.jsx";
import Juz21 from "./components/pages/juz/Juz21.jsx";
import Juz22 from "./components/pages/juz/Juz22.jsx";
import Juz23 from "./components/pages/juz/Juz23.jsx";
import Juz24 from "./components/pages/juz/Juz24.jsx";
import Juz25 from "./components/pages/juz/Juz25.jsx";
import Juz26 from "./components/pages/juz/Juz26.jsx";
import Juz27 from "./components/pages/juz/Juz27.jsx";
import Juz28 from "./components/pages/juz/Juz28.jsx";
import Juz29 from "./components/pages/juz/Juz29.jsx";
import Juz30 from "./components/pages/juz/Juz30.jsx";

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
  { path: "/juz10", element: <Juz10 name="Juz 10" /> },
  { path: "/juz11", element: <Juz11 name="Juz 11" /> },
  { path: "/juz12", element: <Juz12 name="Juz 12" /> },
  { path: "/juz13", element: <Juz13 name="Juz 13" /> },
  { path: "/juz14", element: <Juz14 name="Juz 14" /> },
  { path: "/juz15", element: <Juz15 name="Juz 15" /> },
  { path: "/juz16", element: <Juz16 name="Juz 16" /> },
  { path: "/juz17", element: <Juz17 name="Juz 17" /> },
  { path: "/juz18", element: <Juz18 name="Juz 18" /> },
  { path: "/juz19", element: <Juz19 name="Juz 19" /> },
  { path: "/juz20", element: <Juz20 name="Juz 20" /> },
  { path: "/juz21", element: <Juz21 name="Juz 21" /> },
  { path: "/juz22", element: <Juz22 name="Juz 22" /> },
  { path: "/juz23", element: <Juz23 name="Juz 23" /> },
  { path: "/juz24", element: <Juz24 name="Juz 24" /> },
  { path: "/juz25", element: <Juz25 name="Juz 25" /> },
  { path: "/juz26", element: <Juz26 name="Juz 26" /> },
  { path: "/juz27", element: <Juz27 name="Juz 27" /> },
  { path: "/juz28", element: <Juz28 name="Juz 28" /> },
  { path: "/juz29", element: <Juz29 name="Juz 29" /> },
  { path: "/juz30", element: <Juz30 name="Juz 30" /> },
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

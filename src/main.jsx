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
import Juz1 from "./components/pages/juz/Alafsay/Juz1.jsx";
import Juz2 from "./components/pages/juz/Alafsay/Juz2.jsx";
import Juz5 from "./components/pages/juz/Alafsay/Juz5.jsx";
import Juz3 from "./components/pages/juz/Alafsay/Juz3.jsx";
import Juz4 from "./components/pages/juz/Alafsay/Juz4.jsx";
import Juz6 from "./components/pages/juz/Alafsay/Juz6.jsx";
import Juz7 from "./components/pages/juz/Alafsay/Juz7.jsx";
import Juz8 from "./components/pages/juz/Alafsay/Juz8.jsx";
import Juz9 from "./components/pages/juz/Alafsay/Juz9.jsx";
import Juz10 from "./components/pages/juz/Alafsay/Juz10.jsx";
import Juz11 from "./components/pages/juz/Alafsay/Juz11.jsx";
import Juz12 from "./components/pages/juz/Alafsay/Juz12.jsx";
import Juz13 from "./components/pages/juz/Alafsay/Juz13.jsx";
import Juz14 from "./components/pages/juz/Alafsay/Juz14.jsx";
import Juz15 from "./components/pages/juz/Alafsay/Juz15.jsx";
import Juz16 from "./components/pages/juz/Alafsay/Juz16.jsx";
import Juz17 from "./components/pages/juz/Alafsay/Juz17.jsx";
import Juz18 from "./components/pages/juz/Alafsay/Juz18.jsx";
import Juz19 from "./components/pages/juz/Alafsay/Juz19.jsx";
import Juz20 from "./components/pages/juz/Alafsay/Juz20.jsx";
import Juz21 from "./components/pages/juz/Alafsay/Juz21.jsx";
import Juz22 from "./components/pages/juz/Alafsay/Juz22.jsx";
import Juz23 from "./components/pages/juz/Alafsay/Juz23.jsx";
import Juz24 from "./components/pages/juz/Alafsay/Juz24.jsx";
import Juz25 from "./components/pages/juz/Alafsay/Juz25.jsx";
import Juz26 from "./components/pages/juz/Alafsay/Juz26.jsx";
import Juz27 from "./components/pages/juz/Alafsay/Juz27.jsx";
import Juz28 from "./components/pages/juz/Alafsay/Juz28.jsx";
import Juz29 from "./components/pages/juz/Alafsay/Juz29.jsx";
import Juz30 from "./components/pages/juz/Alafsay/Juz30.jsx";
import YJuz1 from "./components/pages/juz/Yasser/Juz1.jsx";
import YJuz2 from "./components/pages/juz/Yasser/Juz2.jsx";
import YJuz3 from "./components/pages/juz/Yasser/Juz3.jsx";
import YJuz4 from "./components/pages/juz/Yasser/Juz4.jsx";
import YJuz5 from "./components/pages/juz/Yasser/Juz5.jsx";
import YJuz6 from "./components/pages/juz/Yasser/Juz6.jsx";
import YJuz7 from "./components/pages/juz/Yasser/Juz7.jsx";
import YJuz8 from "./components/pages/juz/Yasser/Juz8.jsx";
import YJuz9 from "./components/pages/juz/Yasser/Juz9.jsx";
import YJuz10 from "./components/pages/juz/Yasser/Juz10.jsx";
import YJuz11 from "./components/pages/juz/Yasser/Juz11.jsx";
import YJuz12 from "./components/pages/juz/Yasser/Juz12.jsx";
import YJuz13 from "./components/pages/juz/Yasser/Juz13.jsx";
import YJuz14 from "./components/pages/juz/Yasser/Juz14.jsx";
import YJuz15 from "./components/pages/juz/Yasser/Juz15.jsx";
import YJuz16 from "./components/pages/juz/Yasser/Juz16.jsx";
import YJuz17 from "./components/pages/juz/Yasser/Juz17.jsx";
import YJuz18 from "./components/pages/juz/Yasser/Juz18.jsx";
import YJuz19 from "./components/pages/juz/Yasser/Juz19.jsx";
import YJuz20 from "./components/pages/juz/Yasser/Juz20.jsx";
import YJuz21 from "./components/pages/juz/Yasser/Juz21.jsx";
import YJuz22 from "./components/pages/juz/Yasser/Juz22.jsx";
import YJuz23 from "./components/pages/juz/Yasser/Juz23.jsx";
import YJuz24 from "./components/pages/juz/Yasser/Juz24.jsx";
import YJuz25 from "./components/pages/juz/Yasser/Juz25.jsx";
import YJuz26 from "./components/pages/juz/Yasser/Juz26.jsx";
import YJuz27 from "./components/pages/juz/Yasser/Juz27.jsx";
import YJuz28 from "./components/pages/juz/Yasser/Juz28.jsx";
import YJuz29 from "./components/pages/juz/Yasser/Juz29.jsx";
import YJuz30 from "./components/pages/juz/Yasser/Juz30.jsx";

import Surah1 from "./components/pages/juz/Alafsay/surahs/Surah1.jsx";
import Surah2 from "./components/pages/juz/Alafsay/surahs/Surah2.jsx";
import Surah3 from "./components/pages/juz/Alafsay/surahs/Surah3.jsx";
import Surah4 from "./components/pages/juz/Alafsay/surahs/Surah4.jsx";
import Surah5 from "./components/pages/juz/Alafsay/surahs/Surah5.jsx";
import Surah6 from "./components/pages/juz/Alafsay/surahs/Surah6.jsx";
import Surah7 from "./components/pages/juz/Alafsay/surahs/Surah7.jsx";
import Surah8 from "./components/pages/juz/Alafsay/surahs/Surah8.jsx";
import Surah9 from "./components/pages/juz/Alafsay/surahs/Surah9.jsx";
import Surah10 from "./components/pages/juz/Alafsay/surahs/Surah10.jsx";
import Surah11 from "./components/pages/juz/Alafsay/surahs/Surah11.jsx";
import Surah12 from "./components/pages/juz/Alafsay/surahs/Surah12.jsx";
import Surah13 from "./components/pages/juz/Alafsay/surahs/Surah13.jsx";
import Surah14 from "./components/pages/juz/Alafsay/surahs/Surah14.jsx";
import Surah15 from "./components/pages/juz/Alafsay/surahs/Surah15.jsx";
import Surah16 from "./components/pages/juz/Alafsay/surahs/Surah16.jsx";
import Surah17 from "./components/pages/juz/Alafsay/surahs/Surah17.jsx";
import Surah18 from "./components/pages/juz/Alafsay/surahs/Surah18.jsx";
import Surah19 from "./components/pages/juz/Alafsay/surahs/Surah19.jsx";
import Surah20 from "./components/pages/juz/Alafsay/surahs/Surah20.jsx";
import Surah21 from "./components/pages/juz/Alafsay/surahs/Surah21.jsx";
import Surah22 from "./components/pages/juz/Alafsay/surahs/Surah22.jsx";
import Surah23 from "./components/pages/juz/Alafsay/surahs/Surah23.jsx";
import Surah24 from "./components/pages/juz/Alafsay/surahs/Surah24.jsx";
import Surah25 from "./components/pages/juz/Alafsay/surahs/Surah25.jsx";
import Surah26 from "./components/pages/juz/Alafsay/surahs/Surah26.jsx";
import Surah27 from "./components/pages/juz/Alafsay/surahs/Surah27.jsx";
import Surah28 from "./components/pages/juz/Alafsay/surahs/Surah28.jsx";
import Surah29 from "./components/pages/juz/Alafsay/surahs/Surah29.jsx";
import Surah30 from "./components/pages/juz/Alafsay/surahs/Surah30.jsx";
import Surah31 from "./components/pages/juz/Alafsay/surahs/Surah31.jsx";
import Surah32 from "./components/pages/juz/Alafsay/surahs/Surah32.jsx";
import Surah33 from "./components/pages/juz/Alafsay/surahs/Surah33.jsx";
import Surah34 from "./components/pages/juz/Alafsay/surahs/Surah34.jsx";
import Surah35 from "./components/pages/juz/Alafsay/surahs/Surah35.jsx";
import Surah36 from "./components/pages/juz/Alafsay/surahs/Surah36.jsx";
import Surah37 from "./components/pages/juz/Alafsay/surahs/Surah37.jsx";
import Surah38 from "./components/pages/juz/Alafsay/surahs/Surah38.jsx";
import Surah39 from "./components/pages/juz/Alafsay/surahs/Surah39.jsx";
import Surah40 from "./components/pages/juz/Alafsay/surahs/Surah40.jsx";
import Surah41 from "./components/pages/juz/Alafsay/surahs/Surah41.jsx";
import Surah42 from "./components/pages/juz/Alafsay/surahs/Surah42.jsx";
import Surah43 from "./components/pages/juz/Alafsay/surahs/Surah43.jsx";
import Surah44 from "./components/pages/juz/Alafsay/surahs/Surah44.jsx";
import Surah45 from "./components/pages/juz/Alafsay/surahs/Surah45.jsx";
import Surah46 from "./components/pages/juz/Alafsay/surahs/Surah46.jsx";
import Surah47 from "./components/pages/juz/Alafsay/surahs/Surah47.jsx";
import Surah48 from "./components/pages/juz/Alafsay/surahs/Surah48.jsx";
import Surah49 from "./components/pages/juz/Alafsay/surahs/Surah49.jsx";
import Surah50 from "./components/pages/juz/Alafsay/surahs/Surah50.jsx";
import Surah51 from "./components/pages/juz/Alafsay/surahs/Surah51.jsx";
import Surah52 from "./components/pages/juz/Alafsay/surahs/Surah52.jsx";
import Surah53 from "./components/pages/juz/Alafsay/surahs/Surah53.jsx";
import Surah54 from "./components/pages/juz/Alafsay/surahs/Surah54.jsx";
import Surah55 from "./components/pages/juz/Alafsay/surahs/Surah55.jsx";
import Surah56 from "./components/pages/juz/Alafsay/surahs/Surah56.jsx";
import Surah57 from "./components/pages/juz/Alafsay/surahs/Surah57.jsx";
import Surah58 from "./components/pages/juz/Alafsay/surahs/Surah58.jsx";
import Surah59 from "./components/pages/juz/Alafsay/surahs/Surah59.jsx";
import Surah60 from "./components/pages/juz/Alafsay/surahs/Surah60.jsx";
import Surah61 from "./components/pages/juz/Alafsay/surahs/Surah61.jsx";
import Surah62 from "./components/pages/juz/Alafsay/surahs/Surah62.jsx";
import Surah63 from "./components/pages/juz/Alafsay/surahs/Surah63.jsx";
import Surah64 from "./components/pages/juz/Alafsay/surahs/Surah64.jsx";
import Surah65 from "./components/pages/juz/Alafsay/surahs/Surah65.jsx";
import Surah66 from "./components/pages/juz/Alafsay/surahs/Surah66.jsx";
import Surah67 from "./components/pages/juz/Alafsay/surahs/Surah67.jsx";
import Surah68 from "./components/pages/juz/Alafsay/surahs/Surah68.jsx";
import Surah69 from "./components/pages/juz/Alafsay/surahs/Surah69.jsx";
import Surah70 from "./components/pages/juz/Alafsay/surahs/Surah70.jsx";
import Surah71 from "./components/pages/juz/Alafsay/surahs/Surah71.jsx";
import Surah72 from "./components/pages/juz/Alafsay/surahs/Surah72.jsx";
import Surah73 from "./components/pages/juz/Alafsay/surahs/Surah73.jsx";
import Surah74 from "./components/pages/juz/Alafsay/surahs/Surah74.jsx";
import Surah75 from "./components/pages/juz/Alafsay/surahs/Surah75.jsx";
import Surah76 from "./components/pages/juz/Alafsay/surahs/Surah76.jsx";
import Surah77 from "./components/pages/juz/Alafsay/surahs/Surah77.jsx";
import Surah78 from "./components/pages/juz/Alafsay/surahs/Surah78.jsx";
import Surah79 from "./components/pages/juz/Alafsay/surahs/Surah79.jsx";
import Surah80 from "./components/pages/juz/Alafsay/surahs/Surah80.jsx";
import Surah81 from "./components/pages/juz/Alafsay/surahs/Surah81.jsx";
import Surah82 from "./components/pages/juz/Alafsay/surahs/Surah82.jsx";
import Surah83 from "./components/pages/juz/Alafsay/surahs/Surah83.jsx";
import Surah84 from "./components/pages/juz/Alafsay/surahs/Surah84.jsx";
import Surah85 from "./components/pages/juz/Alafsay/surahs/Surah85.jsx";
import Surah86 from "./components/pages/juz/Alafsay/surahs/Surah86.jsx";
import Surah87 from "./components/pages/juz/Alafsay/surahs/Surah87.jsx";
import Surah88 from "./components/pages/juz/Alafsay/surahs/Surah88.jsx";
import Surah89 from "./components/pages/juz/Alafsay/surahs/Surah89.jsx";
import Surah90 from "./components/pages/juz/Alafsay/surahs/Surah90.jsx";
import Surah91 from "./components/pages/juz/Alafsay/surahs/Surah91.jsx";
import Surah92 from "./components/pages/juz/Alafsay/surahs/Surah92.jsx";
import Surah93 from "./components/pages/juz/Alafsay/surahs/Surah93.jsx";
import Surah94 from "./components/pages/juz/Alafsay/surahs/Surah94.jsx";
import Surah95 from "./components/pages/juz/Alafsay/surahs/Surah95.jsx";
import Surah96 from "./components/pages/juz/Alafsay/surahs/Surah96.jsx";
import Surah97 from "./components/pages/juz/Alafsay/surahs/Surah97.jsx";
import Surah98 from "./components/pages/juz/Alafsay/surahs/Surah98.jsx";
import Surah99 from "./components/pages/juz/Alafsay/surahs/Surah99.jsx";
import Surah100 from "./components/pages/juz/Alafsay/surahs/Surah100.jsx";
import Surah101 from "./components/pages/juz/Alafsay/surahs/Surah101.jsx";
import Surah102 from "./components/pages/juz/Alafsay/surahs/Surah102.jsx";
import Surah103 from "./components/pages/juz/Alafsay/surahs/Surah103.jsx";
import Surah104 from "./components/pages/juz/Alafsay/surahs/Surah104.jsx";
import Surah105 from "./components/pages/juz/Alafsay/surahs/Surah105.jsx";
import Surah106 from "./components/pages/juz/Alafsay/surahs/Surah106.jsx";
import Surah107 from "./components/pages/juz/Alafsay/surahs/Surah107.jsx";
import Surah108 from "./components/pages/juz/Alafsay/surahs/Surah108.jsx";
import Surah109 from "./components/pages/juz/Alafsay/surahs/Surah109.jsx";
import Surah110 from "./components/pages/juz/Alafsay/surahs/Surah110.jsx";
import Surah111 from "./components/pages/juz/Alafsay/surahs/Surah111.jsx";
import Surah112 from "./components/pages/juz/Alafsay/surahs/Surah112.jsx";
import Surah113 from "./components/pages/juz/Alafsay/surahs/Surah113.jsx";
import Surah114 from "./components/pages/juz/Alafsay/surahs/Surah114.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/surah1",
    element: <Surah1 />,
  },

  {
    path: "/surah2",
    element: <Surah2 />,
  },

  {
    path: "/surah3",
    element: <Surah3 />,
  },

  {
    path: "/surah4",
    element: <Surah4 />,
  },

  {
    path: "/surah5",
    element: <Surah5 />,
  },

  {
    path: "/surah6",
    element: <Surah6 />,
  },

  {
    path: "/surah7",
    element: <Surah7 />,
  },

  {
    path: "/surah8",
    element: <Surah8 />,
  },

  {
    path: "/surah9",
    element: <Surah9 />,
  },

  {
    path: "/surah10",
    element: <Surah10 />,
  },

  {
    path: "/surah11",
    element: <Surah11 />,
  },

  {
    path: "/surah12",
    element: <Surah12 />,
  },

  {
    path: "/surah13",
    element: <Surah13 />,
  },

  {
    path: "/surah14",
    element: <Surah14 />,
  },

  {
    path: "/surah15",
    element: <Surah15 />,
  },

  {
    path: "/surah16",
    element: <Surah16 />,
  },

  {
    path: "/surah17",
    element: <Surah17 />,
  },

  {
    path: "/surah18",
    element: <Surah18 />,
  },

  {
    path: "/surah19",
    element: <Surah19 />,
  },

  {
    path: "/surah20",
    element: <Surah20 />,
  },

  {
    path: "/surah21",
    element: <Surah21 />,
  },

  {
    path: "/surah22",
    element: <Surah22 />,
  },

  {
    path: "/surah23",
    element: <Surah23 />,
  },

  {
    path: "/surah24",
    element: <Surah24 />,
  },

  {
    path: "/surah25",
    element: <Surah25 />,
  },

  {
    path: "/surah26",
    element: <Surah26 />,
  },

  {
    path: "/surah27",
    element: <Surah27 />,
  },

  {
    path: "/surah28",
    element: <Surah28 />,
  },

  {
    path: "/surah29",
    element: <Surah29 />,
  },

  {
    path: "/surah30",
    element: <Surah30 />,
  },

  {
    path: "/surah31",
    element: <Surah31 />,
  },

  {
    path: "/surah32",
    element: <Surah32 />,
  },

  {
    path: "/surah33",
    element: <Surah33 />,
  },

  {
    path: "/surah34",
    element: <Surah34 />,
  },

  {
    path: "/surah35",
    element: <Surah35 />,
  },

  {
    path: "/surah36",
    element: <Surah36 />,
  },

  {
    path: "/surah37",
    element: <Surah37 />,
  },

  {
    path: "/surah38",
    element: <Surah38 />,
  },

  {
    path: "/surah39",
    element: <Surah39 />,
  },

  {
    path: "/surah40",
    element: <Surah40 />,
  },

  {
    path: "/surah41",
    element: <Surah41 />,
  },

  {
    path: "/surah42",
    element: <Surah42 />,
  },

  {
    path: "/surah43",
    element: <Surah43 />,
  },

  {
    path: "/surah44",
    element: <Surah44 />,
  },

  {
    path: "/surah45",
    element: <Surah45 />,
  },

  {
    path: "/surah46",
    element: <Surah46 />,
  },

  {
    path: "/surah47",
    element: <Surah47 />,
  },

  {
    path: "/surah48",
    element: <Surah48 />,
  },

  {
    path: "/surah49",
    element: <Surah49 />,
  },

  {
    path: "/surah50",
    element: <Surah50 />,
  },

  {
    path: "/surah51",
    element: <Surah51 />,
  },

  {
    path: "/surah52",
    element: <Surah52 />,
  },

  {
    path: "/surah53",
    element: <Surah53 />,
  },

  {
    path: "/surah54",
    element: <Surah54 />,
  },

  {
    path: "/surah55",
    element: <Surah55 />,
  },

  {
    path: "/surah56",
    element: <Surah56 />,
  },

  {
    path: "/surah57",
    element: <Surah57 />,
  },

  {
    path: "/surah58",
    element: <Surah58 />,
  },

  {
    path: "/surah59",
    element: <Surah59 />,
  },

  {
    path: "/surah60",
    element: <Surah60 />,
  },

  {
    path: "/surah61",
    element: <Surah61 />,
  },

  {
    path: "/surah62",
    element: <Surah62 />,
  },

  {
    path: "/surah63",
    element: <Surah63 />,
  },

  {
    path: "/surah64",
    element: <Surah64 />,
  },

  {
    path: "/surah65",
    element: <Surah65 />,
  },

  {
    path: "/surah66",
    element: <Surah66 />,
  },

  {
    path: "/surah67",
    element: <Surah67 />,
  },

  {
    path: "/surah68",
    element: <Surah68 />,
  },

  {
    path: "/surah69",
    element: <Surah69 />,
  },

  {
    path: "/surah70",
    element: <Surah70 />,
  },

  {
    path: "/surah71",
    element: <Surah71 />,
  },

  {
    path: "/surah72",
    element: <Surah72 />,
  },

  {
    path: "/surah73",
    element: <Surah73 />,
  },

  {
    path: "/surah74",
    element: <Surah74 />,
  },

  {
    path: "/surah75",
    element: <Surah75 />,
  },

  {
    path: "/surah76",
    element: <Surah76 />,
  },

  {
    path: "/surah77",
    element: <Surah77 />,
  },

  {
    path: "/surah78",
    element: <Surah78 />,
  },

  {
    path: "/surah79",
    element: <Surah79 />,
  },

  {
    path: "/surah80",
    element: <Surah80 />,
  },

  {
    path: "/surah81",
    element: <Surah81 />,
  },

  {
    path: "/surah82",
    element: <Surah82 />,
  },

  {
    path: "/surah83",
    element: <Surah83 />,
  },

  {
    path: "/surah84",
    element: <Surah84 />,
  },

  {
    path: "/surah85",
    element: <Surah85 />,
  },

  {
    path: "/surah86",
    element: <Surah86 />,
  },

  {
    path: "/surah87",
    element: <Surah87 />,
  },

  {
    path: "/surah88",
    element: <Surah88 />,
  },

  {
    path: "/surah89",
    element: <Surah89 />,
  },

  {
    path: "/surah90",
    element: <Surah90 />,
  },

  {
    path: "/surah91",
    element: <Surah91 />,
  },

  {
    path: "/surah92",
    element: <Surah92 />,
  },

  {
    path: "/surah93",
    element: <Surah93 />,
  },

  {
    path: "/surah94",
    element: <Surah94 />,
  },

  {
    path: "/surah95",
    element: <Surah95 />,
  },

  {
    path: "/surah96",
    element: <Surah96 />,
  },

  {
    path: "/surah97",
    element: <Surah97 />,
  },

  {
    path: "/surah98",
    element: <Surah98 />,
  },

  {
    path: "/surah99",
    element: <Surah99 />,
  },

  {
    path: "/surah100",
    element: <Surah100 />,
  },

  {
    path: "/surah101",
    element: <Surah101 />,
  },

  {
    path: "/surah102",
    element: <Surah102 />,
  },

  {
    path: "/surah103",
    element: <Surah103 />,
  },

  {
    path: "/surah104",
    element: <Surah104 />,
  },

  {
    path: "/surah105",
    element: <Surah105 />,
  },

  {
    path: "/surah106",
    element: <Surah106 />,
  },

  {
    path: "/surah107",
    element: <Surah107 />,
  },

  {
    path: "/surah108",
    element: <Surah108 />,
  },

  {
    path: "/surah109",
    element: <Surah109 />,
  },

  {
    path: "/surah110",
    element: <Surah110 />,
  },

  {
    path: "/surah111",
    element: <Surah111 />,
  },

  {
    path: "/surah112",
    element: <Surah112 />,
  },

  {
    path: "/surah113",
    element: <Surah113 />,
  },

  {
    path: "/surah114",
    element: <Surah114 />,
  },
  {
    path: "/audios",
    element: <Audios />,
  },
  {
    path: "/juzY1",
    element: <YJuz1 name="Juz 1" />,
  },
  {
    path: "/juzY2",
    element: <YJuz2 name="Juz 2" />,
  },
  {
    path: "/juzY3",
    element: <YJuz3 name="Juz 3" />,
  },
  {
    path: "/juzY4",
    element: <YJuz4 name="Juz 4" />,
  },
  {
    path: "/juzY5",
    element: <YJuz5 name="Juz 5" />,
  },
  {
    path: "/juzY6",
    element: <YJuz6 name="Juz 6" />,
  },
  {
    path: "/juzY7",
    element: <YJuz7 name="Juz 7" />,
  },
  {
    path: "/juzY8",
    element: <YJuz8 name="Juz 8" />,
  },
  {
    path: "/juzY9",
    element: <YJuz9 name="Juz 9" />,
  },
  {
    path: "/juzY10",
    element: <YJuz10 name="Juz 10" />,
  },
  {
    path: "/juzY11",
    element: <YJuz11 name="Juz 11" />,
  },
  {
    path: "/juzY12",
    element: <YJuz12 name="Juz 12" />,
  },
  {
    path: "/juzY13",
    element: <YJuz13 name="Juz 13" />,
  },
  {
    path: "/juzY14",
    element: <YJuz14 name="Juz 14" />,
  },
  {
    path: "/juzY15",
    element: <YJuz15 name="Juz 15" />,
  },
  {
    path: "/juzY16",
    element: <YJuz16 name="Juz 16" />,
  },
  {
    path: "/juzY17",
    element: <YJuz17 name="Juz 17" />,
  },
  {
    path: "/juzY18",
    element: <YJuz18 name="Juz 18" />,
  },
  {
    path: "/juzY19",
    element: <YJuz19 name="Juz 19" />,
  },
  {
    path: "/juzY20",
    element: <YJuz20 name="Juz 20" />,
  },
  {
    path: "/juzY21",
    element: <YJuz21 name="Juz 21" />,
  },
  {
    path: "/juzY22",
    element: <YJuz22 name="Juz 22" />,
  },
  {
    path: "/juzY23",
    element: <YJuz23 name="Juz 23" />,
  },
  {
    path: "/juzY24",
    element: <YJuz24 name="Juz 24" />,
  },
  {
    path: "/juzY25",
    element: <YJuz25 name="Juz 25" />,
  },
  {
    path: "/juzY26",
    element: <YJuz26 name="Juz 26" />,
  },
  {
    path: "/juzY27",
    element: <YJuz27 name="Juz 27" />,
  },
  {
    path: "/juzY28",
    element: <YJuz28 name="Juz 28" />,
  },
  {
    path: "/juzY29",
    element: <YJuz29 name="Juz 29" />,
  },
  {
    path: "/juzY30",
    element: <YJuz30 name="Juz 30" />,
  },
  {
    path: "/yasser",
    element: <Yasser name="Yasser" />,
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
    path: "/wm-ya",
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

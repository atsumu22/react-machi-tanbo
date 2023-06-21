import { KobeCity } from "../components/pages/KobeCity";
import { Page404 } from "../components/pages/Page404";
import { Tarumi } from "../components/pages/wards/Tarumi";
import { Suma } from "../components/pages/wards/Suma";
import { Nagata } from "../components/pages/wards/Nagata";
import { Hyogo } from "../components/pages/wards/Hyogo";
import { Chuo } from "../components/pages/wards/Chuo";
import { Nada } from "../components/pages/wards/Nada";
import { HigashiNada } from "../components/pages/wards/HigashiNada";
import { Kita } from "../components/pages/wards/Kita";
import { Nishi } from "../components/pages/wards/Nishi";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <KobeCity />
  },
  {
    path: "/Tarumi",
    exact: false,
    children: <Tarumi />
  },
  {
    path: "/Suma",
    exact: false,
    children: <Suma />
  },
  {
    path: "/Nagata",
    exact: false,
    children: <Nagata />
  },
  {
    path: "/Hyogo",
    exact: false,
    children: <Hyogo />
  },
  {
    path: "/Chuo",
    exact: false,
    children: <Chuo />
  },
  {
    path: "/Nada",
    exact: false,
    children: <Nada />
  },
  {
    path: "/HigashiNada",
    exact: false,
    children: <HigashiNada />
  },
  {
    path: "/Kita",
    exact: false,
    children: <Kita />
  },
  {
    path: "/Nishi",
    exact: false,
    children: <Nishi />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
];

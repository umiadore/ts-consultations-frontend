import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";


export default function Layout(): JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

import Header from "components/common/header";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

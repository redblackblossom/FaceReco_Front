import { Outlet } from "react-router-dom";
import IndexHeaderPage from "./IndexHeader";

export default function IndexPage() {
  return (
    <>
      <IndexHeaderPage />
      <main>
        <Outlet />
      </main>
    </>
  );
}

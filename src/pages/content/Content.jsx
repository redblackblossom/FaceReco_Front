import { Outlet } from "react-router-dom";

import ContentHeaderPage from "./ContentHeader";

export default function ContentPage() {
  return (
    <>
      <ContentHeaderPage />
      <main>
        <Outlet />
      </main>
    </>
  );
}

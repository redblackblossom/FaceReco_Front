import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/index/Login";
import IndexPage from "./pages/index/Index";
import ContentPage from "./pages/content/Content";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      children: [{ index: true, element: <LoginPage /> }],
    },
    {
      path: "content",
      element: <ContentPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

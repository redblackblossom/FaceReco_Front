import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage, { action as authAction } from "./pages/index/Login";
import IndexPage from "./pages/index/Index";
import ContentPage from "./pages/content/Content";
import SignupPage from "./pages/index/Signup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
      errorElement: <ContentPage />,
      children: [
        { index: true, element: <LoginPage />, action: authAction },
        { path: "signup", element: <SignupPage /> },
      ],
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

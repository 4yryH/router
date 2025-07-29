import { Posts } from "./pages/posts/Posts.jsx";
import { About } from "./pages/about/About.jsx";
import { Feedback } from "./pages/feedback/Feedback.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

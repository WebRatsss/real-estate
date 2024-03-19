import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/hero",
  //   element: <Hero/>,
  // },
  // {
  //   path: "/Hero",
  //   element: <Hero/>,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>,
  // },
  // {
  //   path: "/gallery",
  //   element: <Gallery/>,
  // },
  // {
  //   path: "/banner",
  //   element: <Banner/>,
  // },
  // {
  //   path: "/about",
  //   element: <About/>,
  // },
  // {
  //   path: "/portfolio",
  //   element: <Portfolio/>,
  // }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


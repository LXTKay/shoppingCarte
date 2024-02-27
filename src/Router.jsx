import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import MainPage from "./MainPage";
import ShopPage from "./ShopPage";
import CartPage from "./CartPage";

function Router(){
  const route = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <MainPage/>
        },
        {
          path: "main",
          element: <MainPage/>,
        },
        {
          path: "shop",
          element: <ShopPage/>,
        },
        {
          path: "cart",
          element: <CartPage/>,
        }
      ]
    },
  ])

  return <RouterProvider router={route}/>;
}

export default Router;
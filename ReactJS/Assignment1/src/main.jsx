import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FeatureComponent from "./components/FeatureComponent.jsx";
import FeatureSection from "./components/FeatureSection.jsx";

import PublicLayout from "./layouts/PublicLayout.jsx";
import CategoryComponent from "./components/CategoryComponent.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import Products from "./pages/products.jsx";
import Wishlist from "./pages/Wishlist.jsx";
// import WishlistProvider from "./context/WishlistContext.jsx";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/category/:category",
        element: <CategoryProducts />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      // {
      //   path:"/cart",
      //   element:<Cart/>,
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      {/* <WishlistProvider> */}
        <RouterProvider router={router} />
      {/* </WishlistProvider> */}
    {/* </Provider> */}
  </StrictMode>
);

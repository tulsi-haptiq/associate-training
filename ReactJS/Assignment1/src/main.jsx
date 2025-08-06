import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import FeatureComponent from "./components/FeatureComponent.jsx";
// import FeatureSection from "./components/FeatureSection.jsx";
// import CategoryComponent from "./components/CategoryComponent.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicLayout from "./layouts/PublicLayout.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import Products from "./pages/products.jsx";
import WishlistProvider from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart.jsx";
import SignUp from "./pages/SignUp.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/auth",
        element: <SignUp />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <WishlistProvider>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </WishlistProvider>
    </Provider>
  </StrictMode>
);

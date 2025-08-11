import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicLayout from "./layouts/PublicLayout.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import WishlistProvider from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist.jsx";
import { Provider } from "react-redux";
import Products from "./pages/Products.jsx";
import store from "./redux/store";
import Cart from "./pages/Cart.jsx";
import SignUp from "./pages/SignUp.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CustomErrorPage from "./components/CustomErrorPage.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <CustomErrorPage />,
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
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <WishlistProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </ErrorBoundary>
      </WishlistProvider>
    </Provider>
  </StrictMode>
);

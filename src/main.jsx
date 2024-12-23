import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PersonalInfo from "./components/pages/PersonalInfo.jsx";
import Preferences from "./components/pages/Preferences.jsx";
import ReviewSubmit from "./components/pages/ReviewSubmit.jsx";
import FormContext from "./utils/FormContext.jsx";
import AddressDetails from "./components/pages/AddressDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PersonalInfo />,
      },
      {
        path: "/address",
        element: <AddressDetails />,
      },
      {
        path: "/preferences",
        element: <Preferences />,
      },
      {
        path: "/review",
        element: <ReviewSubmit />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormContext>
      <RouterProvider router={router} />
    </FormContext>
  </StrictMode>
);

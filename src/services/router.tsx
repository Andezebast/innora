import { createBrowserRouter } from "react-router-dom";

import AllPage from "../pages/AllPage";
import DeletePage from "../pages/DeletePage";
import Tabs from "../components/Tabs/Tabs";

export const router = createBrowserRouter([
  {
    path: "/innora",
    element: (
      <>
        <Tabs />
        <AllPage />
      </>
    ),
  },
  {
    path: "/delete",
    element: (
      <>
        <Tabs />
        <DeletePage />
      </>
    ),
  },
]);

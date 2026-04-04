import { createBrowserRouter } from "react-router";
import MatchesRecentList from "@/pages/matches/MatchesRecentList.tsx";
import CommonLayout from "@/layout/common.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <MatchesRecentList />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import MatchesRecentList from "@/pages/matches/MatchesRecentList.tsx";
import Search from "@/pages/search/Search";
import CommonLayout from "@/layout/common.tsx";
import DataCenter from "@/components/pages/matches/DataCenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: (
          <DataCenter>
            <MatchesRecentList />
          </DataCenter>
        ),
      },
    ],
  },
  {
    path: "/search",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <Search />,
      },
    ],
  }
]);

export default router;

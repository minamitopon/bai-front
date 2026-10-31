import { createBrowserRouter } from "react-router";
import MatchesRecentList from "@/pages/matches/MatchesRecentList.tsx";
import Search from "@/pages/search/Search";
import CommonLayout from "@/layout/common.tsx";
import MatchesDataCenter from "@/components/pages/matches/DataCenter";
import SearchDataCenter from "@/components/pages/search/DataCenter";
import Board from "@/pages/board/Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: (
          <MatchesDataCenter>
            <MatchesRecentList />
          </MatchesDataCenter>
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
        element: (
          <SearchDataCenter>
            <Search />
          </SearchDataCenter>
        ),
      },
    ],
  },
  {
    path: "/board/:uuid/:boardNumber",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <Board />,
      },
    ]
  }
]);

export default router;

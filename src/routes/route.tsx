import { createBrowserRouter } from "react-router";
import MatchesRecentList from "@/pages/matches/MatchesRecentList.tsx";
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
]);

export default router;

import { createBrowserRouter } from "react-router";
import MatchesRecentList from "@/pages/matches/MatchesRecentList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MatchesRecentList />,
  },
]);

export default router;

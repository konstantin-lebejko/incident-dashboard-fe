import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import IncidentView from './views/IncidentView';
import IncidentsView from './views/IncidentsView';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IncidentsView />,
      },
      {
        path: "/:incident_id",
        element: <IncidentView />,
      },
    ],
  },
]);

export default router;
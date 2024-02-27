import React from "react";
import { createBrowserRouter } from "react-router-dom";

import IncidentView from './views/IncidentView';
import IncidentsView from './views/IncidentsView';


const router = createBrowserRouter([
  {
    path: "/",
    element: <IncidentsView />,
  },
  {
    path: "/:incident_id",
    element: <IncidentView />,
  },
]);

export default router;
import React from "react";
import IncidentsTable from "../components/IncidentsTable";

const IncidentsView: React.FC = () => {
  return <>
    <p className="text-2xl text-gray-900 dark:text-white mb-4">Recent Incidents</p>
    <IncidentsTable/>
  </>;
};

export default IncidentsView;

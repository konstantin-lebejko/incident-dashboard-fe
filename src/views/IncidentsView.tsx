import React from "react";

import { Title, Grid, Paper } from "@mantine/core";

import IncidentsTable from "../components/IncidentsTable";

const IncidentsView: React.FC = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Paper p="xl" withBorder>
          content
        </Paper>
      </Grid.Col>
      <Grid.Col span={3}>
        <Paper p="xl" withBorder>
          content
        </Paper>
      </Grid.Col>
      <Grid.Col span={3}>
        <Paper p="xl" withBorder>
          content
        </Paper>
      </Grid.Col>
      <Grid.Col span={3}>
        <Paper p="xl" withBorder>
          content
        </Paper>
      </Grid.Col>
      <Grid.Col span={12}>
        <Paper p="xl" withBorder>
          <Title order={2} mb="15">
            Recent Incidents
          </Title>
          <IncidentsTable />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default IncidentsView;

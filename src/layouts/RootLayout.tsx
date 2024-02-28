import React from "react";
import { Outlet } from "react-router";

import { Container, Flex } from "@mantine/core";

const RootLayout: React.FC = () => {
  return (
    <Container fluid bg="#fbfbfb">
      <Flex
        mih={50}
        h="100vh"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap">
        <Outlet />
      </Flex>
    </Container>
  );
};

export default RootLayout;

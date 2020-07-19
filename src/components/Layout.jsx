import React from "react";
import styled from "styled-components";
import { gray } from "../util/color";

const LayoutContainer = styled.div`
  min-width: 1200px;
  background-color: ${gray[4]};
  overflow: hidden;
`;

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

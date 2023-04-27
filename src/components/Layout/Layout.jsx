import React from "react";
import { LayoutWrapper } from "./StyledLayout";

function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;

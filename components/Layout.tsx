import type { ReactElement, ReactNode } from "react";

import Header from "@components/Header";
import Footer from "@components/Foooter";
import Navigation from "@components/Navigation";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props): ReactElement => (
  <>
    <Header>
      <Navigation />
    </Header>
    <main>{children}</main>
    <Footer>Footer</Footer>
  </>
);

export default Layout;

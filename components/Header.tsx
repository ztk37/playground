import type { ReactElement, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Header = ({ children }: Props): ReactElement => (
  <header>{children}</header>
);

export default Header;

import type { ReactElement, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Footer = ({ children }: Props): ReactElement => (
  <footer>{children}</footer>
);

export default Footer;

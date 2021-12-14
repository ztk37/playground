import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import Layout from "@components/Layout";

type Props = {
  title: string;
  children?: ReactNode;
};

const Container = ({ title, children }: Props): ReactElement => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Layout>{children}</Layout>
  </div>
);

export default Container;

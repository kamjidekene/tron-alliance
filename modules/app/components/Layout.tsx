import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: NextPage = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="Tron-alliance">
      <Head>
        <title>Tron Alliance</title>
        <meta name="description" content="Tron Alliance" />
        <link rel="icon" href="/Tron.png" />
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
      <style jsx>{`
        .Tron-alliance {
          min-height: 100vh;
        }
        .container {
          padding: 0 2rem;
        }
      `}</style>
    </div>
  );
};

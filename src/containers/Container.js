import React from "react";
import Header from "../components/Header";

export default function Container({ children }) {
  return (
    <>
      <Header />
      <section className="container mx-auto scrolling-auto px-4 lg:px-0">
        {children}
      </section>
    </>
  );
}

import React, { ReactElement, ReactNode } from "react";
import Navigation from "../components/Navigation";

interface defaultLayoutProps {
  children?: ReactNode
}

export default function DefaultLayout({children}: defaultLayoutProps) {
  return <div>
    <Navigation theme="muted"/>
    {children}
  </div>;
}
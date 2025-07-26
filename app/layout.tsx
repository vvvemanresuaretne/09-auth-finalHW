import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub Application",
};

interface LayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            {children}
            {modal}
            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}

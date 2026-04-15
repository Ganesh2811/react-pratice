"use client";
import React, { createContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const DataContext = createContext<string | null>(null);
export const GenderContext = createContext<string | null>(null);

export default function RootLayout({ children }: Props) {
  // use context hook
  // create, provider, useContext
  const name = "ganesh";
  const gender = "male";

  return (
    <DataContext.Provider value={name}>
      <GenderContext.Provider value={gender}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </GenderContext.Provider>
    </DataContext.Provider>
  );
}
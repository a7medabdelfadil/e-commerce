'use client'

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from '@clerk/nextjs';
import { CartContext } from "./_context/CartContext";
import { useState } from "react";
import { ICartItem } from "./interfaces/interface";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [cart, setCart] = useState<ICartItem[]>([]);

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body className={roboto.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}

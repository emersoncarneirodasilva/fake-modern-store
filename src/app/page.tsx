"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/sections/Products";
import { CartProvider } from "@/context/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar />
        <Products />
        <Footer />
      </CartProvider>
    </QueryClientProvider>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductClientView } from "./ProductClientView";
import { QuoteProvider } from "@/context/QuoteContext";
import { GetAQuoteModal } from "@/components/GetAQuoteModal";
import { Toast } from "@/components/Toast";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Curate 4 related products: same collection first, then fill with other bestsellers
  const sameCollection = PRODUCTS.filter(
    (p) => p.id !== product.id && p.collection === product.collection
  );
  const otherProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.collection !== product.collection
  );
  const related = [...sameCollection, ...otherProducts].slice(0, 4);

  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231710] font-sans selection:bg-[#dfb758] selection:text-[#450206]">
        <Navbar />
        <main className="flex-1 w-full py-10 md:py-16">
          <ProductClientView product={product} related={related} />
        </main>
        <Footer />
        <GetAQuoteModal />
        <Toast />
      </div>
    </QuoteProvider>
  );
}

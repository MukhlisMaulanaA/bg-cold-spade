import { notFound } from "next/navigation";
import { productDetails } from "@/data/productDetails";
import { ProductDetailSection } from "@/components/product/ProductDetailSection";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

/* Generate static pages */
export async function generateStaticParams() {
  return productDetails.map((product) => ({
    slug: product.id,
  }));
}

/* Optional SEO metadata */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const product = productDetails.find(
    (item) => item.id === params.slug
  );

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.tagline,
  };
}

/* Main Page */
export default async function ProductPage({ params }: PageProps) {

  const product = productDetails.find(
    (item) => item.id === params.slug
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailSection product={product} />;
}
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetailSection } from "@/components/product/ProductDetailSection";
import { Metadata } from "next";
import { ProductDetail } from "@/types/ProductDetail";

interface PageProps {
  params: {
    slug: string;
  };
}

/* Generate static pages */
export async function generateStaticParams() {
  // generate slugs from product names so URLs are stable
  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return products.map((product) => ({
    slug: slugify(product.name),
  }));
}

/* Optional SEO metadata */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  // params may be a Promise in some Next.js runtime modes — unwrap it
  const resolvedParams: { slug: string } = (await params) as any;

  // find the product by computing the same slug from the product's name
  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const srcProduct = products.find((p) => slugify(p.name) === resolvedParams.slug);

  if (!srcProduct) {
    notFound();
  }

  // Build a ProductDetail payload from the simpler Product data,
  // filling in reasonable defaults for fields the detail page expects.
  const buildSpecs = (ageGroup: string | undefined) => {
    if (ageGroup === "toddlers") return "2 - 5 Years";
    if (ageGroup === "juniors") return "5 - 10 Years";
    return "6 - 12 Years";
  };

  const product: ProductDetail = {
    id: resolvedParams.slug,
    name: srcProduct!.name,
    tagline: srcProduct!.name,
    rating: (srcProduct as any).rating ?? 4,
    reviewCount: (srcProduct as any).reviewCount ?? 0,
    price: srcProduct.price,
    originalPrice: (srcProduct as any).originalPrice,
    stock: (srcProduct as any).stock ?? "In Stock",
    badge: srcProduct.badge === "Bestseller" ? "Bestseller" : undefined,
    images: (srcProduct as any).images ?? [srcProduct.image],
    description: ((srcProduct as any).description
      ? [srcProduct.description]
      : ["No description available."]) as string[],
    specs: (srcProduct as any).specs ?? {
      ageRange: buildSpecs(srcProduct.ageGroup),
      weight: "-",
      materials: "-",
      warranty: "-",
    },
  };

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
  // params may be a Promise in some Next.js runtime modes — unwrap it
  const resolvedParams: { slug: string } = (await params) as any;

  // find the product by computing the same slug from the product's name
  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  const srcProduct = products.find((p) => slugify(p.name) === resolvedParams.slug);

  if (!srcProduct) {
    notFound();
  }

  const buildSpecs = (ageGroup: string | undefined) => {
    if (ageGroup === "toddlers") return "2 - 5 Years";
    if (ageGroup === "juniors") return "5 - 10 Years";
    return "6 - 12 Years";
  };

  const product: ProductDetail = {
    id: resolvedParams.slug,
    name: srcProduct!.name,
    tagline: srcProduct!.name,
    rating: (srcProduct as any).rating ?? 4,
    reviewCount: (srcProduct as any).reviewCount ?? 0,
    price: srcProduct.price,
    originalPrice: (srcProduct as any).originalPrice,
    stock: (srcProduct as any).stock ?? "In Stock",
    badge: srcProduct.badge === "Bestseller" ? "Bestseller" : undefined,
    images: (srcProduct as any).images ?? [srcProduct.image],
    description: ((srcProduct as any).description
      ? [srcProduct.description]
      : ["No description available."]) as string[],
    specs: (srcProduct as any).specs ?? {
      ageRange: buildSpecs(srcProduct.ageGroup),
      weight: "-",
      materials: "-",
      warranty: "-",
    },
  };

  return <ProductDetailSection product={product} />;
}
import ProductDetailClient from "@/components/product/ProductDetailClient";

export function generateStaticParams() {
  return [{ slug: 'nom' }, { slug: 'organizer' }];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductDetailClient slug={params.slug} />;
}
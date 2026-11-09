import ServiceDetailClient from "@/components/services/ServiceDetailClient";

export function generateStaticParams() {
  return [
    { slug: 'enterprise' },
    { slug: 'web' },
    { slug: 'mobile' },
    { slug: 'desktop' },
    { slug: 'api' },
    { slug: 'uiux' },
    { slug: 'ecommerce' },
    { slug: 'saas' },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ServiceDetailClient slug={params.slug} />;
}
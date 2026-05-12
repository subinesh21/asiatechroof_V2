import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import ServiceTemplate from "@/components/ServiceTemplate";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceTemplate
      eyebrow={service.eyebrow}
      title={service.title}
      intro={service.intro}
      image={service.img}
      bullets={service.bullets}
    />
  );
}

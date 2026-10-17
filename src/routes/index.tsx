import { createFileRoute } from "@tanstack/react-router";
import { FusionifyExperience } from "@/components/fusionify-experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fusionify — Digital technology ecosystem from Bogor, Indonesia" },
      {
        name: "description",
        content:
          "Fusionify builds digital automation, software, scalable infrastructure and ready-to-use digital products for individuals, UMKM, startups and companies.",
      },
      {
        property: "og:title",
        content: "Fusionify — Digital technology ecosystem",
      },
      {
        property: "og:description",
        content:
          "A growing technology ecosystem: Fusionify Bot, FTV Pay, Fusionify Solutions, FTV Injector and Fusionify digital tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fusionify",
          legalName: "PT Fusionify Digital Store",
          foundingDate: "2024-08-18",
          url: "/",
          description:
            "Digital technology ecosystem building automation, software, digital infrastructure and ready-to-use digital products.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bogor",
            addressCountry: "ID",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return <FusionifyExperience />;
}

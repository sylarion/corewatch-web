export const metadata = {
  title: "Inicio - CoreWatch",
  description:
    "CoreWatch ofrece monitoreo IT inteligente para redes, servidores, contenedores y aplicaciones. Dashboards en tiempo real, alertas avanzadas y consultoría especializada.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}

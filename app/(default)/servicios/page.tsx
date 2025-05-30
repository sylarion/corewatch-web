"use client";

import { Brain, ServerCog, Network, BarChart4 } from "lucide-react";
import Footer from "@/components/ui/footer";

export default function ServiciosPage() {
  const items = [
    {
      icon: <Brain size={32} className="text-pink-400" />,
      title: "Monitoreo Inteligente",
      desc: "Detectamos anomalías en tiempo real usando alertas configurables con IA y patrones.",
    },
    {
      icon: <Network size={32} className="text-blue-400" />,
      title: "Infraestructura de Redes",
      desc: "Supervisamos switches, routers, firewalls y enlaces críticos. SNMP, NetFlow y más.",
    },
    {
      icon: <ServerCog size={32} className="text-indigo-400" />,
      title: "Servidores y VMs",
      desc: "Seguimiento de recursos, procesos, carga y salud de tus servidores físicos y virtuales.",
    },
    {
      icon: <BarChart4 size={32} className="text-yellow-400" />,
      title: "Dashboards con Grafana",
      desc: "Visualizaciones en tiempo real personalizadas por servicio, cliente o equipo.",
    },
  ];

  return (
    <>
      <section className="relative py-24 text-center px-4">
        {/* SVG decorativos */}
        <img
          src="/images/infra-cloud.svg"
          alt="Infraestructura en la nube"
          className="absolute top-8 left-8 w-40 opacity-10 animate-pulse pointer-events-none"
        />
        <img
          src="/images/network-illustration.svg"
          alt="Red conectada"
          className="absolute bottom-10 right-10 w-48 opacity-10 animate-pulse pointer-events-none"
        />

        {/* Intro texto */}
        <h1 className="text-4xl font-bold mb-4 animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(to_right,white,indigo,white)]">
          Áreas de Servicio de CoreWatch
        </h1>
        <p className="text-indigo-200/80 max-w-3xl mx-auto mb-12 text-lg">
          Ofrecemos monitoreo personalizado de redes, servidores, contenedores, aplicaciones y sistemas críticos.
          Usamos tecnologías como <span className="font-medium text-white">Zabbix</span>,{" "}
          <span className="font-medium text-white">Grafana</span> y alertas inteligentes que anticipan problemas antes de que ocurran.
        </p>

        {/* Grid de servicios */}
        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto z-10 relative">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-left transition hover:border-indigo-500 hover:shadow-md hover:scale-[1.02]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-indigo-200/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

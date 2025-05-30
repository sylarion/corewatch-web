"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiciosPage() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-6 animate-shimmer text-transparent bg-clip-text bg-[linear-gradient(to_right,white,indigo,white)]">
          Servicios de Monitoreo IT
        </h1>
        <p className="text-indigo-200/75 max-w-2xl mx-auto mb-10">
          Ofrecemos monitoreo personalizado de redes, servidores, contenedores,
          aplicaciones y sistemas críticos. Usamos tecnologías como Zabbix,
          Grafana y alertas inteligentes que anticipan problemas antes de que
          ocurran.
        </p>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl w-full">
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm" data-aos="fade-up">
            <h3 className="text-lg font-semibold text-white mb-2">🧠 Monitoreo Inteligente</h3>
            <p className="text-indigo-200/75 text-sm">
              Detectamos anomalías en tiempo real usando alertas configurables.
            </p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold text-white mb-2">📡 Infraestructura de Redes</h3>
            <p className="text-indigo-200/75 text-sm">
              Supervisamos switches, routers, firewalls y enlaces críticos.
            </p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold text-white mb-2">🧰 Servidores y VMs</h3>
            <p className="text-indigo-200/75 text-sm">
              Seguimiento de recursos, procesos, disco, carga y salud de tus servidores físicos y virtuales.
            </p>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold text-white mb-2">📊 Dashboards con Grafana</h3>
            <p className="text-indigo-200/75 text-sm">
              Visualizaciones en tiempo real personalizadas por servicio, cliente o equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

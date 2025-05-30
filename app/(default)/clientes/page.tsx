"use client";

import Logo from "@/components/ui/logo";
import Footer from "@/components/ui/footer";
import { Briefcase, ShieldCheck, Activity } from "lucide-react";

export default function ClientesPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(to_right,white,indigo,white)] mb-4">
            Clientes que confían en CoreWatch
          </h1>
          <p className="text-indigo-200/75 max-w-2xl mx-auto">
            Empresas del sector financiero, salud, logística y tecnología operan con nuestras soluciones de monitoreo.
            Nos eligen por nuestra capacidad de anticipación, precisión en alertas y visualización clara de datos críticos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 text-left max-w-5xl w-full">
          {/* Card 1 */}
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition">
            <Briefcase className="text-indigo-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Sector Financiero</h3>
            <p className="text-indigo-200/75">
              Monitoreo de transacciones críticas, latencia de redes y rendimiento de APIs bancarias. Integraciones con SIEM.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition">
            <ShieldCheck className="text-indigo-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Seguridad & Gobierno</h3>
            <p className="text-indigo-200/75">
              Supervisión en tiempo real de firewalls, routers y túneles VPN. Alertas sobre patrones inusuales de tráfico.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition">
            <Activity className="text-indigo-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">Startups Tech</h3>
            <p className="text-indigo-200/75">
              Clústeres de Kubernetes, pipelines de CI/CD y microservicios monitoreados con precisión y dashboards custom.
            </p>
          </div>
        </div>
      </div>

      {/* Footer universal */}
      <Footer />
    </>
  );
}

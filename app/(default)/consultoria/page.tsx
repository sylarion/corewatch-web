"use client";
import Logo from "@/components/ui/logo";

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(to_right,white,indigo,white)] mb-4">
          Consultoría Técnica
        </h1>
        <p className="text-indigo-200/75 max-w-xl mx-auto">
          Brindamos asesoramiento personalizado en infraestructura, diseño de arquitecturas de monitoreo, integración de alertas inteligentes y optimización de flujos para mantener tu operación bajo control.
        </p>
      </div>
    </div>
  );
}

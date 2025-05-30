"use client";
import Logo from "@/components/ui/logo";

export default function ClientesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(to_right,white,indigo,white)] mb-4">
          Clientes que confían en CoreWatch
        </h1>
        <p className="text-indigo-200/75 max-w-xl mx-auto">
          Empresas del sector financiero, retail y tecnología ya operan con nuestras soluciones de monitoreo. Nos eligen por nuestra capacidad de anticipación, precisión en alertas y visualización clara de datos críticos.
        </p>
      </div>
    </div>
  );
}

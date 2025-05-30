export default function Testimonials() {
  return (
    <section className="relative bg-black py-20">
      {/* Fondo decorativo radial suave */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-600/10 via-indigo-500/5 to-transparent blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center pb-12 md:pb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-100),var(--color-indigo-400),var(--color-indigo-100))] bg-[length:200%_auto] bg-clip-text text-transparent">
            Casos de uso reales
          </h2>
          <p className="text-gray-400 text-lg">
            Cómo ayudamos a empresas a anticiparse a fallos críticos y optimizar su infraestructura.
          </p>
        </div>

        {/* Tarjetas de testimonios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tarjeta 1 */}
          <div className="relative rounded-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 shadow-xl hover:shadow-indigo-500/20 transition duration-300 border border-gray-700/20">
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              “Detectamos fallas en servidores antes que impacten en producción. La implementación fue rápida y el equipo muy profesional.”
            </p>
            <div className="pt-4 border-t border-gray-700/40">
              <p className="text-sm font-medium text-indigo-400">Carlos R.</p>
              <p className="text-xs text-gray-500">Infraestructura - Fintech</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="relative rounded-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 shadow-xl hover:shadow-indigo-500/20 transition duration-300 border border-gray-700/20">
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              “Gracias a las alertas personalizadas, evitamos caídas de red y problemas de conectividad en nuestras sucursales.”
            </p>
            <div className="pt-4 border-t border-gray-700/40">
              <p className="text-sm font-medium text-indigo-400">Luciana M.</p>
              <p className="text-xs text-gray-500">Networking - Retail</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="relative rounded-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 shadow-xl hover:shadow-indigo-500/20 transition duration-300 border border-gray-700/20">
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              “Logramos monitorear todo nuestro entorno Docker y Kubernetes con dashboards claros y soporte técnico excelente.”
            </p>
            <div className="pt-4 border-t border-gray-700/40">
              <p className="text-sm font-medium text-indigo-400">Sebastián T.</p>
              <p className="text-xs text-gray-500">DevOps - eCommerce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      {/* Fondo decorativo */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">

          {/* Título de sección */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Áreas de Monitoreo
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Supervisión integral para tu infraestructura IT
            </h2>
            <p className="text-lg text-indigo-200/65">
              Detectamos problemas antes de que afecten tu operación. Visibilidad en tiempo real para redes, servidores, contenedores y más.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>

          {/* Ítems */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                🌐 Redes y Conectividad
              </h3>
              <p className="text-indigo-200/65">
                Supervisamos switches, routers, firewalls y enlaces críticos. Latencias, pérdida de paquetes y SNMP.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                💻 Servidores físicos y virtuales
              </h3>
              <p className="text-indigo-200/65">
                Métricas de rendimiento (CPU, RAM, disco, procesos), estado de servicios y del hardware.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                📦 Contenedores y Kubernetes
              </h3>
              <p className="text-indigo-200/65">
                Visibilidad total en clústeres, pods, servicios y nodos. Alertas en tiempo real.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                🔐 Seguridad y accesos
              </h3>
              <p className="text-indigo-200/65">
                Auditoría de accesos, detección de eventos anómalos y logs de seguridad.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                🧠 Aplicaciones críticas
              </h3>
              <p className="text-indigo-200/65">
                Seguimiento de disponibilidad, respuesta y monitoreo sintético de APIs.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                📊 Dashboards personalizados
              </h3>
              <p className="text-indigo-200/65">
                Visualización centralizada en Grafana y Zabbix, adaptada a cada rol y necesidad.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

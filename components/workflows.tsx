import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Encabezado */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Nuestro proceso
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Cómo trabajamos el monitoreo
            </h2>
            <p className="text-lg text-indigo-200/65">
              Aplicamos una metodología técnica y flexible para implementar monitoreo completo, efectivo y personalizado en cada cliente.
            </p>
          </div>

          {/* Tarjetas con efecto spotlight */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Paso 1 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Diagnóstico inicial"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal text-indigo-300">
                      Paso 1: Relevamiento
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Auditamos tu red, servidores y sistemas críticos para entender qué necesita ser monitoreado y cómo.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Configuración Zabbix"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal text-indigo-300">
                      Paso 2: Implementación
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Configuramos Zabbix, Grafana y otros agentes en servidores, redes, contenedores y sistemas clave.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Dashboards de monitoreo"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal text-indigo-300">
                      Paso 3: Visualización y soporte
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Entregamos dashboards claros, alertas inteligentes y soporte técnico para asegurar continuidad operativa.
                  </p>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}

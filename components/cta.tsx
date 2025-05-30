import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              ¿Listo para monitorear tu infraestructura como un experto?
            </h2>

            <p className="mb-8 text-lg text-indigo-200/65" data-aos="fade-up" data-aos-delay={200}>
              Agendá una demo gratuita o escribinos para asesoramiento técnico personalizado. En minutos, podés empezar a visualizar tus sistemas críticos.
            </p>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#contacto"
                >
                  <span className="relative inline-flex items-center">
                    Agendar demo
                    <span className="ml-1 text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>

              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="mailto:contacto@monitoring.com"
                >
                  Escribir consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

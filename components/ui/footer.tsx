import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Ilustración decorativa */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:py-12 xl:gap-20">
          {/* Sección 1: Servicios */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#features">Monitoreo de redes</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#features">Servidores y VMs</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#features">Contenedores / Kubernetes</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#features">Dashboards con Grafana</a></li>
            </ul>
          </div>

          {/* Sección 2: Consultoría */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Consultoría</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#workflow">Cómo trabajamos</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#testimonios">Casos de uso</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#contacto">Agendar reunión</a></li>
            </ul>
          </div>

          {/* Sección 3: Recursos */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#0">Documentación</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#0">Soporte técnico</a></li>
              <li><a className="text-indigo-200/65 hover:text-indigo-400 transition" href="#0">Blog técnico</a></li>
            </ul>
          </div>

          {/* Sección 4: Contacto y redes */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm text-indigo-200/65">
              <p className="mb-3">
                © <span className="inline-block bg-gradient-to-r from-indigo-300 via-white to-indigo-300 bg-[length:300%_100%] bg-clip-text text-transparent animate-shimmer font-semibold">CoreWatch</span> {new Date().getFullYear()}
              </p>
              <ul className="inline-flex gap-2 justify-end">
                <li>
                  <a href="https://github.com" className="hover:text-indigo-400 transition" aria-label="Github">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 32 32"><path d="M16 0C7.163 0 0 7.163 0 16c0..." /></svg>
                  </a>
                </li>
                <li>
                  <a href="mailto:contacto@monitoring.com" className="hover:text-indigo-400 transition" aria-label="Email">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Animación del efecto shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -500px 0;
          }
          100% {
            background-position: 500px 0;
          }
        }
        .animate-shimmer {
          background-size: 1000px 100%;
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </footer>
  );
}

"use client";
import Logo from "@/components/ui/logo";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(to_right,white,indigo,white)] mb-4">
          Contactanos
        </h1>
        <p className="text-indigo-200/75 max-w-xl mx-auto mb-4">
          ¿Querés conocer más sobre nuestros servicios o agendar una demo? Escribinos por correo o completá el formulario y uno de nuestros expertos se pondrá en contacto.
        </p>
        <a
          href="mailto:contacto@corewatch.com"
          className="btn bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg"
        >
          contacto@corewatch.com.ar
        </a>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ui/contact-form";
import Logo from "@/components/ui/logo";

export default function DemoPage() {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFull(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-8">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        <h1 className="text-4xl font-bold mb-4 animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(to_right,white,indigo,white)]">
          Agendá una demo con CoreWatch
        </h1>

        <p className="text-indigo-200/75 mb-6 max-w-xl mx-auto">
          Completá el formulario y uno de nuestros especialistas se pondrá en contacto para mostrarte cómo funciona nuestra solución.
        </p>

        <div className="text-xl font-medium text-indigo-100 min-h-[2.5rem] transition-opacity duration-700 ease-in-out">
          {!showFull ? (
            <span className="text-transparent bg-clip-text animate-shimmer bg-[linear-gradient(to_right,white,indigo,white)]">
              Tecnología de monitoreo
            </span>
          ) : (
            <span className="opacity-100 transition-opacity duration-700">
              Tecnología de monitoreo pensada para anticiparse al problema.
            </span>
          )}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

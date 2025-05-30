"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío exitoso
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl w-full bg-gray-800/40 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700/50 mt-10 text-left">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-indigo-200 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ej. Oscar"
                className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-indigo-200 mb-1">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                required
                value={form.apellido}
                onChange={handleChange}
                placeholder="Ej. Morales"
                className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-indigo-200 mb-1">
              Empresa
            </label>
            <input
              type="text"
              name="empresa"
              required
              value={form.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
              className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-indigo-200 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              required
              value={form.telefono}
              onChange={handleChange}
              placeholder="+54 911 1234 5678"
              className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-indigo-200 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="tucorreo@empresa.com"
              className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-indigo-200 mb-1">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Contanos brevemente sobre tus necesidades de monitoreo..."
              className="w-full rounded-lg bg-gray-900 text-white px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg transition"
          >
            Enviar mensaje
          </button>
        </form>
      ) : (
        <p className="text-green-400 text-center font-medium">
          ¡Gracias por contactarte con CoreWatch! Nos comunicaremos pronto.
        </p>
      )}
    </div>
  );
}

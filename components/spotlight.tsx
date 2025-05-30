"use client";

import React, { useRef, useState, useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Spotlight({
  children,
  className = "",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Posición global del mouse (custom hook)
  const mousePosition = useMousePosition();

  // Última posición del mouse dentro del contenedor
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Tamaño del contenedor
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  // Lista de elementos hijos a los que aplicar el efecto
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  // Captura inicial de los hijos al montar el componente
  useEffect(() => {
    if (containerRef.current) {
      const elements = Array.from(containerRef.current.children).map(
        (el) => el as HTMLElement
      );
      setBoxes(elements);
    }
  }, []);

  // Recalcula el tamaño del contenedor cuando cambia el tamaño de la ventana
  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);
    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [boxes]);

  // Actualiza el efecto cada vez que se mueve el mouse
  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;

      // Coordenadas relativas dentro del contenedor
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;

      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;

        // Actualiza variables CSS personalizadas por cada hijo
        boxes.forEach((box) => {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

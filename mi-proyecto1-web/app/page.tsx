"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const pastas = [
    { 
      nombre: "Sorrentinos de Jamón y Queso", 
      precio: "8.500",
      descripcion: "Masa fina al huevo rellena con jamón cocido premium y una selección de muzzarella y tybo fundente.",
      imagen: "/sorrentino.jpg" 
    },
    { 
      nombre: "Ravioles de Espinaca y Ricotta", 
      precio: "7.200",
      descripcion: "Espinaca fresca de huerta picada a cuchillo, ricotta cremosa y una pizca de nuez moscada.",
      imagen: "/ravioles.jpg"
    },
    { 
      nombre: "Tallarines al Huevo", 
      precio: "5.400",
      descripcion: "Corte tradicional con sémola de trigo candeal y 5 huevos por kilo. Textura ideal para salsas.",
      imagen: "/tallarines.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* 1. HERO - FOTO DEL LOCAL */}
      <section className="relative h-[60vh] w-full">
        <Image 
          src="/local.jpg" 
          alt="Nuestra Fábrica en Devoto" 
          fill 
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">
            FÁBRICA DE PASTAS DEVOTO
          </h1>
          <p className="text-xl md:text-2xl font-light italic drop-shadow-md">
            Tradición artesanal desde 1985
          </p>
        </div>
      </section>

      {/* 2. HISTORIA */}
      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-900 mb-6">Nuestra Historia</h2>
        <p className="text-gray-700 leading-relaxed text-lg italic">
          "Comenzamos con una pequeña mesa de madera y el sueño de traer los sabores de nuestras abuelas al barrio de Devoto. 
          Hoy, tres amigos seguimos manteniendo la misma esencia: harina de primera, huevos de campo y el tiempo necesario 
          para que cada raviata sea una obra de arte."
        </p>
      </section>
      {/* 2.5 SECCIÓN DE CULTIVO DE HONGOS */}
<section className="bg-stone-100 py-16 px-6 border-y border-stone-200">
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2 relative h-80 rounded-2xl overflow-hidden shadow-xl">
        <Image 
          src="/cultivo-hongos.jpg" 
          alt="Cultivo de Champiñones" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-stone-800 mb-4">Ingredientes de Nuestra Huerta</h2>
        <p className="text-orange-700 font-semibold mb-2 italic">Champiñones de París & Portobellos</p>
        <p className="text-gray-600 mb-6">
          En el subsuelo de nuestra fábrica recreamos el clima perfecto: 16°C de temperatura constante y 90% de humedad para cosechar cada mañana los hongos que rellenan nuestras pastas.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <span className="block text-2xl mb-1">🍄</span>
            <h4 className="font-bold text-sm">Cosecha Diaria</h4>
            <p className="text-xs text-gray-500">Del sustrato a la raviolera.</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-stone-200">
            <span className="block text-2xl mb-1">🌿</span>
            <h4 className="font-bold text-sm">100% Orgánico</h4>
            <p className="text-xs text-gray-500">Sin pesticidas ni químicos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 3. MENÚ INTERACTIVO */}
      <section className="max-w-2xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Nuestro Menú</h2>
        <div className="space-y-6">
          {pastas.map((pasta, index) => (
            <PastaItem key={index} pasta={pasta} />
          ))}
        </div>
      </section>

      {/* 4. CONTACTO Y MAPA */}
      <section className="bg-orange-800 text-white py-16 px-6 mt-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contactanos</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span>📍</span> Villa Devoto, CABA
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span> +54 11 1234-5678
              </li>
              <li className="flex items-center gap-3">
                <span>⏰</span> Mar a Dom: 09 a 13:30 hs
              </li>
            </ul>
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
              Enviar WhatsApp
            </button>
          </div>
          <div className="bg-orange-700/50 rounded-2xl p-6 border border-orange-600">
            <h3 className="font-bold mb-4">¿Dónde estamos?</h3>
            <p className="text-orange-100 italic">
              Estamos en el corazón de Devoto, a pocas cuadras de la plaza. Vení a buscar tus pastas recién salidas.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm">
        © 2024 MI-PROYECTO1-WEB - Todos los derechos reservados.
      </footer>
    </main>
  );
}

function PastaItem({ pasta }: { pasta: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)} 
      className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden cursor-pointer transition-all hover:shadow-lg"
    >
      <div className="flex items-center p-4">
        <div className="relative h-20 w-20 flex-shrink-0">
          <Image src={pasta.imagen} alt={pasta.nombre} fill className="object-cover rounded-xl" />
        </div>
        <div className="ml-4 flex-grow">
          <h3 className="text-xl font-bold text-gray-800">{pasta.nombre}</h3>
          <p className="text-orange-600 font-bold">${pasta.precio}</p>
        </div>
        <span className="text-2xl text-orange-300 ml-2">{isOpen ? '−' : '+'}</span>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2 animate-in fade-in slide-in-from-top-2">
          <p className="text-gray-600 border-t border-stone-100 pt-4 italic">
            {pasta.descripcion}
          </p>
        </div>
      )}
    </div>
  );
}
'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5562982289379?text=Ol%C3%A1%2C%20queria%20saber%20como%20funciona%20o%20processo%20para%20ter%20minha%20p%C3%A1gina%20de%20alta%20convers%C3%A3o",
      "_blank"
    );
  }
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Transforme sua <span className="text-indigo-400">presença digital</span> com{" "}
            <span className="block">páginas de alta conversão</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Criamos landing pages otimizadas que convertem visitantes em clientes, com design moderno e experiência de
            usuário excepcional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={openWhatsApp} asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base">
              <Link href="#contato">
                Solicitar Orçamento{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 py-6 text-base"
            >
              <Link href="#portfolio">
                Ver Portfolio{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-[#1a2234] rounded-lg p-2 border border-gray-700 shadow-xl">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/capa.png?height=600&width=800"
                alt="Website example"
                width={800}
                height={600}
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

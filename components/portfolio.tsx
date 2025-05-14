import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nosso Portfolio</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos para nossos clientes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* TechStore */}
        <div className="bg-[#1a2234] rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all">
          <div className="relative h-48 w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="TechStore"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">TechStore</h3>
            <p className="text-gray-300 mb-4">E-commerce de produtos tecnológicos</p>
          </div>
        </div>

        {/* FinanceApp */}
        <div className="bg-[#1a2234] rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all">
          <div className="relative h-48 w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="FinanceApp"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">FinanceApp</h3>
            <p className="text-gray-300 mb-4">Landing page para aplicativo financeiro</p>
          </div>
        </div>

        {/* Gourmet Express */}
        <div className="bg-[#1a2234] rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all">
          <div className="relative h-48 w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Gourmet Express"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Gourmet Express</h3>
            <p className="text-gray-300 mb-4">Site institucional para restaurante</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base">
          <Link href="#contato">
            Ver todos os projetos{" "}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  )
}

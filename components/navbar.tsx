'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5562982289379?text=Ol%C3%A1%2C%20queria%20saber%20como%20funciona%20o%20processo%20para%20ter%20minha%20p%C3%A1gina%20de%20alta%20convers%C3%A3o",
      "_blank"
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-indigo-400 text-2xl">
                <img src="/mosfy.png" width={40} height={40} alt="" />
              </span>
              <span className="ml-2 text-white font-bold text-xl">MOSFY</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#servicos" className="text-gray-300 hover:text-white">
              Serviços
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white">
              Portfolio
            </Link>
            <Link href="#processo" className="text-gray-300 hover:text-white">
              Processo
            </Link>
            <Link href="#depoimentos" className="text-gray-300 hover:text-white">
              Depoimentos
            </Link>
          </nav>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6" onClick={openWhatsApp}>
            <Link href="#contato">
              Fale Conosco{" "}
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
      </div>
    </header>
  )
}


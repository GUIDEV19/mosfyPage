import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-indigo-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para transformar sua presença digital?
        </h2>
        <p className="text-indigo-100 mb-8 text-lg">
          Entre em contato hoje mesmo e vamos criar uma landing page que converte visitantes em clientes.
        </p>
        <Button asChild className="bg-white hover:bg-gray-100 text-indigo-800 rounded-full px-8 py-6 text-base">
          <Link href="#contato">
            Solicitar Orçamento{" "}
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

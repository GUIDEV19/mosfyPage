import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Conheça a experiência de quem já trabalhou conosco</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Depoimento 1 */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800">
          <div className="flex items-center mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Ricardo Mendes"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h4 className="text-white font-bold">Ricardo Mendes</h4>
              <p className="text-gray-400 text-sm">CEO, TechStore</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            "Nossa taxa de conversão aumentou 150% após o lançamento da nova landing page. O design moderno e a
            estrutura otimizada fizeram toda a diferença."
          </p>
          <div className="flex">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>

        {/* Depoimento 2 */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800">
          <div className="flex items-center mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Amanda Silva"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h4 className="text-white font-bold">Amanda Silva</h4>
              <p className="text-gray-400 text-sm">Marketing, FinanceApp</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            "Equipe extremamente profissional e atenciosa. O processo de desenvolvimento foi transparente e o resultado
            final superou nossas expectativas."
          </p>
          <div className="flex">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>

        {/* Depoimento 3 */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800">
          <div className="flex items-center mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Carlos Oliveira"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h4 className="text-white font-bold">Carlos Oliveira</h4>
              <p className="text-gray-400 text-sm">Proprietário, Gourmet Express</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            "Nosso site ficou incrível! Desde o lançamento, tivemos um aumento significativo no número de reservas
            online e pedidos de delivery."
          </p>
          <div className="flex">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>
      </div>
    </section>
  )
}

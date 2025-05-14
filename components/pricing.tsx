import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="precos" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planos e Preços</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Escolha o plano ideal para o seu negócio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plano Básico */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
          <p className="text-gray-400 mb-6">Ideal para pequenos negócios</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">R$1.990</span>
            <span className="text-gray-400">/único</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Landing page de uma página</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Design responsivo</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Formulário de contato</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">SEO básico</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Entrega em 7 dias</span>
            </li>
          </ul>
          <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
            Selecionar Plano
          </Button>
        </div>

        {/* Plano Profissional */}
        <div className="bg-[#1a2234] p-8 rounded-lg border-2 border-indigo-500 flex flex-col h-full relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Mais Popular
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Profissional</h3>
          <p className="text-gray-400 mb-6">Para negócios em crescimento</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">R$3.490</span>
            <span className="text-gray-400">/único</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Site com até 5 páginas</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Design personalizado</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Integração com redes sociais</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">SEO avançado</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Suporte por 30 dias</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Entrega em 15 dias</span>
            </li>
          </ul>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Selecionar Plano</Button>
        </div>

        {/* Plano Empresarial */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-2">Empresarial</h3>
          <p className="text-gray-400 mb-6">Solução completa para empresas</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">R$6.990</span>
            <span className="text-gray-400">/único</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Site com até 15 páginas</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">E-commerce completo</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Painel administrativo</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Integrações com APIs</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">SEO avançado</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Suporte por 90 dias</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300">Entrega em 30 dias</span>
            </li>
          </ul>
          <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
            Selecionar Plano
          </Button>
        </div>
      </div>
    </section>
  )
}

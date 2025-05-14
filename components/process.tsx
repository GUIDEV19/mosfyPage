import { MessageSquare, PenTool, Code, Rocket } from "lucide-react"

export default function Process() {
  return (
    <section id="processo" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nosso Processo</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Trabalhamos de forma transparente e colaborativa para entregar resultados excepcionais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Linha conectando os itens */}
        <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-indigo-600/30"></div>

        {/* Descoberta */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            1
          </div>
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <MessageSquare className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Descoberta</h3>
          <p className="text-gray-300">
            Entendemos seus objetivos, público-alvo e necessidades específicas para o projeto
          </p>
        </div>

        {/* Design */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <PenTool className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Design</h3>
          <p className="text-gray-300">
            Criamos wireframes e designs visuais alinhados com sua marca e objetivos de conversão
          </p>
        </div>

        {/* Desenvolvimento */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            3
          </div>
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Code className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Desenvolvimento</h3>
          <p className="text-gray-300">Transformamos o design em código, garantindo performance e responsividade</p>
        </div>

        {/* Lançamento */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 relative">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            4
          </div>
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Rocket className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Lançamento</h3>
          <p className="text-gray-300">Publicamos seu site e oferecemos suporte contínuo para garantir seu sucesso</p>
        </div>
      </div>
    </section>
  )
}

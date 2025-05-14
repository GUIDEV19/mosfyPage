import Link from "next/link"
import { Rocket, ShoppingBag, Monitor } from "lucide-react"

export default function Services() {
  return (
    <section id="servicos" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Desenvolvemos soluções web personalizadas que atendem às suas necessidades específicas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Landing Pages */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all">
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Rocket className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Landing Pages</h3>
          <p className="text-gray-300 mb-6">
            Páginas otimizadas para conversão que capturam leads e aumentam suas vendas com design persuasivo.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Alta taxa de conversão
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Design responsivo
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Otimizado para SEO
            </li>
          </ul>
          <Link href="#contato" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
            Saiba mais
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>

        {/* E-commerce */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all">
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <ShoppingBag className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">E-commerce</h3>
          <p className="text-gray-300 mb-6">
            Lojas virtuais completas com experiência de compra fluida e sistemas de pagamento integrados.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Catálogo de produtos
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Checkout otimizado
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Integração com pagamentos
            </li>
          </ul>
          <Link href="#contato" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
            Saiba mais
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>

        {/* Sites Institucionais */}
        <div className="bg-[#1a2234] p-8 rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all">
          <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Monitor className="w-7 h-7 text-indigo-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Sites Institucionais</h3>
          <p className="text-gray-300 mb-6">
            Websites profissionais que representam sua marca e comunicam sua proposta de valor.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Design personalizado
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Painel administrativo
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Otimização de performance
            </li>
          </ul>
          <Link href="#contato" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
            Saiba mais
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

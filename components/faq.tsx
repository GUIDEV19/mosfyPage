import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">Tire suas dúvidas sobre nossos serviços</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-gray-800 bg-[#1a2234] rounded-lg">
            <AccordionTrigger className="text-white px-6 py-4 hover:no-underline">
              Quanto tempo leva para desenvolver uma landing page?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 px-6 pb-4">
              O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Uma landing page simples pode
              ser entregue em 7 dias, enquanto projetos mais complexos podem levar até 4 semanas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-gray-800 bg-[#1a2234] rounded-lg">
            <AccordionTrigger className="text-white px-6 py-4 hover:no-underline">
              Vocês oferecem suporte após a entrega?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 px-6 pb-4">
              Sim, oferecemos suporte técnico após a entrega do projeto. O período de suporte varia de acordo com o
              plano contratado, podendo ser de 30 a 90 dias.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-gray-800 bg-[#1a2234] rounded-lg">
            <AccordionTrigger className="text-white px-6 py-4 hover:no-underline">
              É possível fazer alterações no projeto durante o desenvolvimento?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 px-6 pb-4">
              Sim, trabalhamos de forma colaborativa e você poderá solicitar ajustes durante o processo de
              desenvolvimento. Oferecemos até 2 rodadas de revisões inclusas no preço.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-gray-800 bg-[#1a2234] rounded-lg">
            <AccordionTrigger className="text-white px-6 py-4 hover:no-underline">
              Vocês oferecem hospedagem para o site?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 px-6 pb-4">
              Podemos recomendar e configurar a hospedagem mais adequada para o seu projeto. Também oferecemos planos de
              hospedagem gerenciada como serviço adicional.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

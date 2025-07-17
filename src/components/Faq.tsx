import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é a velocidade de internet que vocês oferecem?",
    answer: "Oferecemos diversas velocidades para atender todas as necessidades, desde planos residenciais até empresariais de alta demanda.",
  },
  {
    question: "Vocês oferecem conexão de fibra óptica?",
    answer: "Sim, trabalhamos com conexão de fibra óptica para garantir máxima velocidade e estabilidade.",
  },
  {
    question: "Como posso entrar em contato com o suporte ao cliente em caso de dúvidas ou problemas?",
    answer: "Você pode entrar em contato pelo nosso telefone, WhatsApp ou através do nosso portal de atendimento online.",
  },
  {
    question: "Como faço para atualizar minha velocidade de internet ou fazer alterações no plano?",
    answer: "Basta entrar em contato com nossa equipe de vendas ou atendimento para solicitar a alteração desejada.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full px-8 xl:px-20 py-12 bg-gradient-to-b from-[#032EC099] to-transparent text-white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Lado esquerdo - Texto + FAQ */}
        <div className="flex-1">
          <div className="text-primary font-medium uppercase mb-2 flex items-center gap-2">
            <div className="w-10 h-1 bg-primary"></div> FAQ
          </div>
          <h2 className="text-4xl font-bold mb-10">
            Tire suas dúvidas sobre a <span className="text-white">Net Cintra</span>
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="bg-[#FFFFFFC9] text-black text-md px-4 py-3 border-none rounded-2xl">{faq.question}</AccordionTrigger>
                <AccordionContent className="py-4 border-none border-0 border-transparent">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Lado direito - Imagem */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/images/faq.png" 
            alt="Personagem FAQ" 
            className="max-w-md max-lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}

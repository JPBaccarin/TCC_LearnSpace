import React, { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "Vocês pretendem melhorar ainda mais?",
      answer: "Com certeza! Estamos em constante aperfeiçoamento para oferecer a melhor experiência possível.",
    },
    {
      question: "Vocês planejam oferecer planos pagos para o GPT-3 e GPT-4?",
      answer:
        "Sim, estamos trabalhando em planos pagos para permitir que os usuários desfrutem de recursos avançados do GPT-3 e GPT-4.",
    },
    {
      question: "Quanto custarão esses planos?",
      answer:
        "Estamos planejando oferecer duas opções de assinatura. Uma de $30 para acesso à maioria das aplicações e outra de $40 para a experiência completa do usuário.",
    },
    {
      question: "Quais são os benefícios de assinar um plano pago?",
      answer:
        "Ao assinar um plano pago, os usuários terão acesso a recursos premium, incluindo respostas mais avançadas do GPT-3 e GPT-4, suporte prioritário e muito mais.",
    },
    {
      question: "Como posso cancelar minha assinatura?",
      answer:
        "Você pode cancelar sua assinatura a qualquer momento em sua conta. Não há compromisso de longo prazo, e faremos o processo de cancelamento o mais simples possível.",
    },
    {
      question: "Vocês têm planos de implementar seu sistema no sistema de ensino da Etec?",
      answer:
        "Sim, temos planos futuros de colaborar com a Etec para implementar nossa tecnologia no sistema de ensino, proporcionando uma experiência de aprendizado avançada para os alunos.",
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-8">
      <Accordion type="single" collapsible className="container">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} onChange={() => toggleQuestion(index)}>
            <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
            <AccordionContent className="text-md">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;

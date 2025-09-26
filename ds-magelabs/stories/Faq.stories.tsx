// src/stories/Faq.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const meta: Meta = {
  title: "Sections/FAQ",
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj

const faqs = [
  {
    question: "Question text goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare...",
  },
  {
    question: "Outra pergunta exemplo",
    answer:
      "Mais uma resposta padrão, com texto simulado. Nunc et sem vitae risus tristique posuere.",
  },
  {
    question: "Mais uma pergunta",
    answer:
      "Aqui você poderia detalhar outro ponto que os usuários perguntam bastante.",
  },
]

export const Default: Story = {
  render: () => (
    <section className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">FAQs</h2>
        <p className="text-muted-foreground mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Collapsible key={idx}>
            <CollapsibleTrigger className="w-full text-left font-medium border-b py-3">
              {faq.question}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-muted-foreground py-3">{faq.answer}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold">Still have questions?</h3>
        <p className="text-muted-foreground mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Button className="mt-4">Contact</Button>
      </div>
    </section>
  ),
}

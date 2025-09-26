import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Mostrar mais</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 border rounded-md mt-2">
          Esse é o conteúdo que pode ser expandido ou colapsado.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
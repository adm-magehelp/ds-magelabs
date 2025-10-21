// Alert.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"], // habilita geração automática de docs
};
export default meta;

type Story = StoryObj<typeof Alert>;

// Story padrão
export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Aviso</AlertTitle>
      <AlertDescription>
        Este é um alerta padrão para chamar atenção do usuário.
      </AlertDescription>
    </Alert>
  ),
};

// Sucesso
export const Success: Story = {
  render: () => (
    <Alert className="border-green-500 text-green-700">
      <AlertTitle>Sucesso</AlertTitle>
      <AlertDescription>
        A operação foi concluída com sucesso!
      </AlertDescription>
    </Alert>
  ),
};

// Erro
export const Error: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Erro</AlertTitle>
      <AlertDescription>
        Algo deu errado, tente novamente.
      </AlertDescription>
    </Alert>
  ),
};

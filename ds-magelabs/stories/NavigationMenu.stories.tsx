// src/components/ui/navigation-menu.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu"; 


function DemoNav() {
  return (
    <div className="w-full flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px]">
                <li><a className="block text-sm hover:underline" href="#">Vitaminas</a></li>
                <li><a className="block text-sm hover:underline" href="#">Proteínas</a></li>
                <li><a className="block text-sm hover:underline" href="#">Termogênicos</a></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Ofertas</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[240px]">
                <div className="text-sm font-medium mb-2">Em destaque</div>
                <a className="block text-sm hover:underline" href="#">Combo 3x</a>
                <a className="block text-sm hover:underline" href="#">Frete grátis</a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="block text-sm" href="#">Institucional</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}

const meta: Meta<typeof DemoNav> = {
  title: "Navigation/NavigationMenu",
  component: DemoNav,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DemoNav>;

export const Default: Story = {};
export const ComMuitosItens: Story = {
  render: () => (
    <div className="w-full">
      <DemoNav />
    </div>
  ),
};

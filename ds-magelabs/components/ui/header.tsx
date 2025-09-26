import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4 bg-white">
      <div className="text-xl font-bold">Minha Loja</div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Início</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/produtos">Produtos</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contato">Contato</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-2">
        <Button variant="outline">Entrar</Button>
        <Button>Cadastrar</Button>
      </div>
    </header>
  )
}

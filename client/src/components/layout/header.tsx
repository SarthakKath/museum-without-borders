import { Link } from "wouter";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="w-full border-b bg-primary">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display text-white hover:text-accent-yellow transition-colors">
            Museum Without Borders
          </a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/exhibitions">
                <a className="font-button text-sm text-white hover:text-accent-pink transition-colors">
                  Exhibitions
                </a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events">
                <a className="font-button text-sm text-white hover:text-accent-green transition-colors">
                  Events
                </a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/artists">
                <a className="font-button text-sm text-white hover:text-accent-purple transition-colors">
                  Artists
                </a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/visit">
                <a className="font-button text-sm text-white hover:text-accent-yellow transition-colors">
                  Visit
                </a>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
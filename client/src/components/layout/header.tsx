import { Link } from "wouter";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Museum Without Borders
          </a>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/exhibitions">
                <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Exhibitions
                </a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events">
                <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Events
                </a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/artists">
                <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Artists
                </a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/visit">
                <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
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
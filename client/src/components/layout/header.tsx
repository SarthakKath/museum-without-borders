import { Link } from "wouter";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold">Museum Without Borders</a>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/exhibitions">
                <a className="text-sm font-medium hover:text-accent">Exhibitions</a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events">
                <a className="text-sm font-medium hover:text-accent">Events</a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/artists">
                <a className="text-sm font-medium hover:text-accent">Artists</a>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/visit">
                <a className="text-sm font-medium hover:text-accent">Visit</a>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

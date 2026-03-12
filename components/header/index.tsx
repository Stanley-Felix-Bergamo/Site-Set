import Link from "next/link";
import { Button } from "../ui/button";
import ActiveLink from "../active-link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-gray-500 border-white/10  backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"}>
           <Image alt="Logo site" src={"/logo.svg"} width={116} height={32} />
          </Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href={"/"}> Início</ActiveLink>
            <ActiveLink href={"/blog"}> blog</ActiveLink>
            <Button variant={"secondary"} asChild>
              <Link href={"/comecar"}>Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

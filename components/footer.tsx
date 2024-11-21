import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Built by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://warfin.us.kg"
            >
              WarFiN
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/warfin123/strokes-website"
            >
              GitHub
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://discord.gg/mxXj4Qj34P"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <SiDiscord className="h-4 w-4 mr-2 text-green-600 fill-current" />
        Discord
      </Link>
    </>
  );
}

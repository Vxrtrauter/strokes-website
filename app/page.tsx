import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, Heart } from "lucide-react";
import Particles from "@/components/particles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[92vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 py-8">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Link
        href="https://github.com/warfin123/strokes-website"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl font-display">
        Strokes
      </h1>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
        A free and open-sourced archive of Minecraft Plugins and Mods
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/archive${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Archive
        </Link>
        <Link
          href="https://discord.gg/mxXj4Qj34P"
          target="_blank"
          className={buttonVariants({
            size: "lg",
          })}
        >
          Discord
        </Link>
      </div>
    </div>
  );
}

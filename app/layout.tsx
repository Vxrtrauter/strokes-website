import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Strokes",
    template: "Strokes | %s",
  },
  description:
    "A free and open-sourced archive of Minecraft Plugins and Mods",
  openGraph: {
    title: "Strokes",
    description:
      "A free and open-sourced archive of Minecraft Plugins and Mods",
    url: "https://www.strokesfiles.com",
    siteName: "strokesfiles.com",
    images: [
      {
        url: "https://github.com/WarFiN123/docs-bugattipvp/blob/main/app/opengraph-image.png?raw=true",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Strokes",
    card: "summary_large_image",
    description:
      "A free and open-sourced archive of Minecraft Plugins and Mods",
    images: [
      "https://github.com/WarFiN123/docs-bugattipvp/blob/main/app/opengraph-image.png?raw=true",
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const Against = LocalFont({
  src: "../public/fonts/Against.ttf",
  variable: "--font-against",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[Against.variable].join(" ")}
    >
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Yummy | Real dinners, zero guesswork",
  description:
    "Chef-designed meal kits with pre-portioned produce. Twelve new dinners every week, on your table in 30 minutes.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("yummy-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${bricolage.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        {children}
        <div
          aria-hidden
          className="grain-layer pointer-events-none fixed inset-0 z-[100]"
        />
      </body>
    </html>
  );
}

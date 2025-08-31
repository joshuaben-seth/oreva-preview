import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import ThemeTransition from "@/components/ThemeTransition";
import PageTransition from "@/components/PageTransition";


export const metadata: Metadata = {
  title: "Oreva - AI-Powered Process Planning",
  description: "AI-native brainstorming and process planning for Product Managers and Project Managers",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://db.onlinewebfonts.com/c/8f2a9d487bbbc60974cd132fc3a63862?family=Aeonik+Regular" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/757ff6da05e4f945c71c9751b485a9ad?family=Aeonik+Medium" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <ThemeTransition>
            <div className="pt-8">
              <Navigation />
            </div>
            <PageTransition>
              {children}
            </PageTransition>
          </ThemeTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}

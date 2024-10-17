import "@/src/styles/globals.css";
import Head from "./head";
import { poppins } from "@/lib/font";
import { ThemeProviders } from "../context/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    suppressHydrationWarning
    >
      <Head />
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProviders>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}

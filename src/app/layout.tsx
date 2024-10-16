import { ThemeProvider } from "../context/ThemeProvider";
import "@/src/styles/globals.css";
import Head from "./head";
import { poppins } from "@/lib/font";


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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

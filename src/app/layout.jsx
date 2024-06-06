import Open_sans from "@/services/FontSecondary";
import "./globals.css";
import { AppContextProvider } from "@/lib/AppContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Franchise RE/MAX Indonesia | Peluang Bisnis Properti Terbaik",
  description:
    "Jadilah bagian RE/MAX Indonesia dengan join frenchase properti terbaik dan dapatkan dukungan serta keuntungan yang bantu sukseskan transaksi properti Anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <Head>
        <meta
          name="google-site-verification"
          content="1k0MLpaNx047RR-LOm_oT-Fe2or7-TY-5ScdL2hPkno"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://us-west-2.graphassets.com/clvptoulx08u507n1gfe11g38/clw4gqvucnpz707lw4v4oofqa"
        />
        <meta property="og:url" content="https://www.franchiseremax.id/" />
        <meta property="og:title" content="Franchise RE/MAX Indonesia" />
        <meta
          property="og:description"
          content="Jadilah bagian RE/MAX Indonesia dengan join frenchase properti terbaik dan dapatkan dukungan serta keuntungan yang bantu sukseskan transaksi properti Anda."
        />
      </Head>
      <AppContextProvider>
        <body className={Open_sans.className}>{children}</body>
      </AppContextProvider>
    </html>
  );
}

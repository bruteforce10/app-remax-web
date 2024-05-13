import Open_sans from "@/services/FontSecondary";
import "./globals.css";
import { AppContextProvider } from "@/lib/AppContext";
import Head from "next/head";

export const metadata = {
  title: "Franchise RE/MAX Indonesia",
  description:
    "Jadilah bagian RE/MAX Indonesia dengan join frenchase properti terbaik dan dapatkan dukungan serta keuntungan yang bantu sukseskan transaksi properti Anda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
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

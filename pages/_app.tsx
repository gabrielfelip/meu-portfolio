// pages/_app.tsx
// Remova: import "@/styles/globals.css";
import "../public/tailwind.css"; // Adicione esta linha! (Ajuste o caminho se necessário)
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
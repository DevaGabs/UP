import { AuthProvider } from "@/contexts/AuthContext";
import type { AppProps } from "next/app";
import "../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

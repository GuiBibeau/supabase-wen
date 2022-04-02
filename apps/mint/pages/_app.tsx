import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WenProvider } from "wen-connect";

function MyApp({ Component, pageProps }: AppProps) {
  const config = { ssr: true };
  return (
    <WenProvider config={config}>
      <Component {...pageProps} />
    </WenProvider>
  ) 
}

export default MyApp

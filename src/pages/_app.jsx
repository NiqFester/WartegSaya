import '@/styles/globals.css'
import { useMemo, useState } from 'react';
import {PesananContext} from '@/context/Pesanan'

export default function App({ Component, pageProps }) {
  const [Pesanan, setPesanan] = useState([]);
  
  const value = useMemo(() => ({ Pesanan, setPesanan }), [Pesanan]);


  return (
  <PesananContext.Provider value={value}>
    {useMemo(
            () => (
              <Component {...pageProps} />
            ),
            [pageProps]
          )}
  </PesananContext.Provider>
  )
}

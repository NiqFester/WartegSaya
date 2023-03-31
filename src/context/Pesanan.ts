import { createContext } from "react";

export const PesananContext = createContext({
  Pesanan: [],
  setPesanan: () => {},
});

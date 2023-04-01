interface Pesanan {
  Pesanan: { id: number; jumlah: number }[];
  setPesanan: Dispatch<SetStateAction<Array<object>>>;
}

interface arrPesanan {
  id: number;
  url: string;
  nama: string;
  harga: number;
  jumlah: number;
}

interface produk {
  id: number;
  nama: string;
  photo: string;
  kategori: string;
  harga: number;
}

interface props {
  data: produk[];
}

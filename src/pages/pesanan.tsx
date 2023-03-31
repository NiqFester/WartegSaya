import Header from "@/component/header/header";
import Footing from "@/component/footer/footer";
import BannerPesanan from "@/component/Banner/bannerUtkPesanan";
import List from "@/component/Pesanan/list";
import Total from "@/component/Pesanan/total";
import { PesananContext } from "@/context/Pesanan";
import { useContext, useEffect, useRef, useState } from "react";

interface Produks {
  id: number;
  nama: string;
  photo: string;
  kategori: string;
  harga: number;
  jumlah?: number;
}

interface props {
  data: Produks[];
}

interface arrPesanan {
  id: number;
  url: string;
  nama: string;
  harga: number;
  jumlah: number;
}

function buatArrPesanan(
  Produks: Produks[],
  Pesanan: { id: number; jumlah: number }[]
): arrPesanan[] {
  let filtered: Produks[] = [];
  for (const x of Pesanan) {
    let z = Produks.filter((y) => y.id === x.id);
    filtered.push({ ...z[0], jumlah: x.jumlah });
  }
  const returned = filtered.map((x) => {
    return {
      id: x.id,
      url: x?.photo,
      nama: x?.nama,
      harga: x?.harga,
      jumlah: x.jumlah ? x.jumlah : 0,
    };
  });
  return returned;
}

export default function Pesanan({ data }: props) {
  const { Pesanan } = useContext(PesananContext);
  const [arrPesanan, setArrPesanan] = useState(buatArrPesanan(data, Pesanan));
  const [total, setTotal] = useState(() => {
    let totalharga = 0;
    for (const x of arrPesanan) {
      totalharga += x.harga * x.jumlah;
    }
    return totalharga;
  });
  const [pesanWA,setPesanWA] = useState(()=>{
    let textArr = []
    for (const x of arrPesanan) {
      textArr.push(x.nama + x.jumlah.toString() + 'Porsi')
    } 
    return textArr
  })

  useEffect(() => {
    let totalharga = 0;
    for (const x of arrPesanan) {
      totalharga += x.harga * x.jumlah;
    }
    setTotal(totalharga);
    let textArr = []
    for (const x of arrPesanan) {
      textArr.push(x.nama +' ' + x.jumlah.toString()+ ' ' + 'Porsi')
    } 
    setPesanWA(textArr)
  }, [Pesanan, arrPesanan]);

  return (
    <>
      <Header data={data} />
      <BannerPesanan url={"/R.jpeg"} text="Pesanan" />
      {arrPesanan.map((x, i) => {
        return <List {...x} key={i} setArrPesanan={setArrPesanan} />;
      })}
      <Total total={total} pesanWA={pesanWA} />
      <div className="w-[100vw] h-[70px] bg-transparent"></div>
      <Footing />
    </>
  );
}

export async function getStaticProps() {
  const { Produk } = await import("../../data/data.json");
  return {
    props: {
      data: Produk,
    },
  };
}

import Image from "next/image";
import { useContext } from "react";
import {PesananContext} from '@/context/Pesanan'

function formatHarga(x) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(x);
}
export default function DivMakanan({ src, text, harga,id }) {
  const {Pesanan,setPesanan} = useContext(PesananContext)
  return (
    <>
    <div className="flex flex-col">
      <Image
        className="rounded-t-lg w-full h-full"
        src={src}
        alt=""
        width={900}
        height={900}
      />
      <div className="flex flex-col text-white rounded-b-lg bg-zinc-900 text-center">
        <p>{text}</p>
        <p>{formatHarga(harga)}/ Porsi</p>
      </div>
    </div>
    <button onClick={()=>{
      if (Pesanan.findIndex(x=>x.id===id)===-1){
      console.log(Pesanan);
      setPesanan(prev=>[...prev, {id:id, jumlah:1}])

      }
      console.log(Pesanan);

    }} className="w-full -mt-3 rounded-lg text-white text-lg bg-red-700"> Pesan </button>
    </>
  );
}

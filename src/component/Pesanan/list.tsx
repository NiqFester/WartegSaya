import Image from "next/image";
import {PesananContext} from '@/context/Pesanan'
import { Dispatch, SetStateAction, useContext } from "react";
import './global'

export default function List({url,nama,harga,jumlah,id, setArrPesanan}:
  {url:string,nama:string,harga:number,jumlah:number,id:number, setArrPesanan:Dispatch<SetStateAction<arrPesanan[]>>}) {
  const {setPesanan} = useContext(PesananContext)
  return (
    <div className="grid grid-cols-5 grid-rows-3 mx-4 my-6 h-[65px]">
      <Image
        className=" row-span-3 h-full rounded-xl"
        src={url}
        height={200}
        width={200}
        alt="makanan"
      />
      <div className="grid grid-rows-3 col-span-3 row-span-3 ml-4 text-sm">
        <p className="">{nama}</p>
        <input
          className="pb-[2px]"
          type="text"
          name="note"
          placeholder="Catatan"
        />
        <p>{harga}</p>
      </div>
      <div className="grid grid-rows-3 row-span-3">
        <button onClick={()=>{
          setArrPesanan(prev=>prev.map(x=>{
            if (x.id===id) {
              let newer = {...x}
              newer.jumlah += 1
              return newer
            }
            return x
          }))
        }}>+</button>
        <p className="text-center">{jumlah}</p>
        <button onClick={()=>{
          setArrPesanan(prev=>prev.map(x=>{
            if (x.id===id) {
              let newer = {...x}
              newer.jumlah -= 1
              return newer
            }
            return x
          }))
        }}>-</button>
      </div>
    </div>
  );
}

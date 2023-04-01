import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

export default function MenuLainya({menu,setMenu,tipe}:
  {menu:boolean[],setMenu:Dispatch<SetStateAction<Array<boolean>>>,tipe:string[]}){
    return (
        <div
        style={{ display: menu[0] ? "flex" : "none" }}
        className="fixed flex-col w-[40vw] h-[100vh] gap-4 z-50 top-0 left-0 bg-gradient-to-br from-slate-900 to-slate-800  "
      >
        <button
          onClick={() => {
            setMenu((prev) => [!prev[0], prev[1]]);
          }}
          className="border-b-white border-b pb-2 mx-2"
        >
          <p className="text-white text-2xl text-left">Menu</p>
        </button>
        <Link
          href={"/pesanan"}
          className="border-b-white border-b pb-2 ml-6 mr-2"
        >
          <p className="text-white text-lg">Pesanan</p>
        </Link>
        <button
          onClick={() => {
            setMenu((prev) => [prev[0], !prev[1]]);
          }}
          className="border-b-white border-b pb-2 ml-6 mr-2"
        >
          <p className="text-white text-lg text-left">Kategori</p>
        </button>
        <div
          style={{ display: menu[1] ? "flex" : "none" }}
          className="flex flex-col ml-10 mr-2"
        >
          <Link href={'/kategori/semua'} className="text-white  border-b-white border-b pb-2 capitalize">
            semua
          </Link>
          {tipe.map((x, i) => {
            return (
              <Link
                href={`/kategori/${x}`}
                className="text-white  border-b-white border-b pb-2 capitalize"
                key={i}
              >
                {x}
              </Link>
            );
          })}
        </div>
        <Link href={'/tentang'} className="border-b-white border-b pb-2 ml-6 mr-2">
          <p className="text-white capitalize text-lg">tentang</p>
        </Link>
        <Link href={'/'} className="border-b-white border-b pb-2 ml-6 mr-2">
          <p className="text-white capitalize text-lg">Beranda</p>
        </Link>
        
      </div>
    )
}
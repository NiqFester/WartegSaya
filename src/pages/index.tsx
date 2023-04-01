import Banner from "@/component/Banner/banner";
import Header from "@/component/header/header";
import ImageWithCaption from "@/component/kategori/imageWithCaption";
import Footing from "@/component/footer/footer";
import DivMakanan from "@/component/divMakanan/divMakanan";
import IconP from "@/component/iconpesanan/iconpesanan";
import IconN from "@/component/iconpesanan/iconnomor"
import { useContext, useState } from "react";
import { PesananContext } from "@/context/Pesanan";


export default function Home({ data }: props) {
  const flags = new Set();
  const tipe = data.filter((pd) => {
    if (flags.has(pd.kategori)) {
      return false;
    }
    flags.add(pd.kategori);
    return true;
  });
  const [show, setShow] = useState(false);
  const {Pesanan} = useContext(PesananContext)

  return (
    <div>
      <div className=" lg:hidden ">
        <Header data={data} />
        <Banner />
        <div
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className=" rounded-lg m-2 bg-gradient-to-l from-zinc-500 to-zinc-800 px-2 flex justify-between "
        >
          <p className="text-zinc-100 rounded-xl">Kategori</p>
          <svg
            className="fill-slate-100 w-3 h-3 mt-[6px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div
          className="grid relative grid-cols-3 grid-flow-row gap-4 justify-center mx-2 "
          style={{
            overflow: show ? "visible" : "hidden",
            height: show ? "fit-content" : "180px",
          }}
        >
          {tipe.map((x, i) => {
            return (
              <ImageWithCaption
                key={i}
                url={x.photo}
                link={`/kategori/${x.kategori}`}
                text={x.kategori}
              />
            );
          })}
          <div
            onClick={() => {
              setShow((prev) => !prev);
            }}
            className="h-[20%] text-white text-center absolute bottom-0 w-[100vw] backdrop-brightness-50 bg-white/30 rounded-t-md "
            style={{ display: show ? "none" : "block" }}
          >
            {" "}
            <p className="mt-2 font-bold">selengkapnya</p>
          </div>
        </div>
        <div
          style={{ marginTop: show ? "0.5rem" : "0" }}
          className=" rounded-lg mx-2 bg-gradient-to-l from-zinc-500 to-zinc-800 px-2 flex justify-between "
        >
          <p className="text-zinc-100 rounded-xl">Rekomendasi</p>
          <svg
            className="fill-slate-100 w-3 h-3 mt-[6px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div className="mb-2 pt-4 grid grid-cols-2 gap-x-1 justify-around gap-y-4 grid-flow-row mx-2">
          {data.slice(0, 5).map((x, i) => {
            return (
              <div key={i} className="w-max-[170px] w-min-[130px]">
                <DivMakanan
                  src={x.photo}
                  text={x.nama}
                  harga={x.harga}
                  id={x.id}
                />
              </div>
            );
          })}
        <IconP />
        <IconN no={Pesanan.length} />
        </div>
        <Footing />
      </div>
      <div className="lg:block hidden">
          <p className="text-center mt-[50vh] text-4xl"> Maaf tapi Web ini hanya bisa dilihat di Hp</p>
      </div>
    </div>
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

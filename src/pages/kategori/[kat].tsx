import { GetStaticPaths, GetStaticProps } from "next";
import BannerPesanan from "@/component/Banner/bannerUtkPesanan";
import Header from "@/component/header/header";
import Footing from "@/component/footer/footer";
import DivMakanan from '@/component/divMakanan/divMakanan'

interface Produks {
  id: number;
  nama: string;
  photo: string;
  kategori: string;
  harga: number;
}

interface props {
  data: { Produk: Produks[]; tipe: Produks[] };
}

const Kat = ({ data }: props) => {
  
  const { Produk, tipe } = data;

  return (
    <div>
      <Header data={Produk} />
      <BannerPesanan url={tipe[0].photo} text={tipe[0].kategori} />
      <div className="flex flex-col w-[90vw] gap-4 mx-2 mt-8">
        {tipe.map((x,i)=>{
          return <DivMakanan key={i} src={x.photo} text={x.nama} harga={x.harga} id={x.id}/>
        })}
      </div>
      <div className="w-[100vw] h-[80px] bg-transparent"></div>

      <Footing />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { Produk } = await import("../../../data/data.json");
  const allPath = Produk.map((pd) => {
    return {
      params: {
        kat: pd.kategori,
      },
    };
  });

  return {
    paths: allPath,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params === undefined ? null : ctx.params.kat;
  const { Produk } = await import("../../../data/data.json");
  const tipe = Produk.filter((pd) => pd.kategori === id);

  return {
    props: {
      data: { Produk, tipe },
    },
  };
};

export default Kat;

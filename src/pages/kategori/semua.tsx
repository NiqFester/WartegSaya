import BannerPesanan from "@/component/Banner/bannerUtkPesanan";
import Header from "@/component/header/header";
import Footing from "@/component/footer/footer";
import DivMakanan from '@/component/divMakanan/divMakanan'

export default function Semua({data}:{data: produk[]}){
    return (
        <div>
      <Header data={data} />
      <BannerPesanan url={data[0].photo} text='semua' />
      <div className="flex flex-col w-[90vw] gap-4 mx-2 mt-8">
        {data.map((x,i)=>{
          return <DivMakanan key={i} src={x.photo} text={x.nama} harga={x.harga} id={x.id}/>
        })}
      </div>
      <div className="w-[100vw] h-[80px] bg-transparent"></div>

      <Footing />
    </div>
    )
}

export async function getStaticProps() {
    const { Produk } = await import("../../../data/data.json");
    return {
        props:{
            data:Produk
        }
    }
}
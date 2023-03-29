import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/component/Banner/banner'
import Header from '@/component/header/header'
import ImageWithCaption from '@/component/kategori/imageWithCaption'
import Footing from '@/component/footer/footer'
import DivMakanan from '@/component/divMakanan/divMakanan'

export default function Home() {
  type ArrayMakanan = {photo: string, nama: string}[]

  const arrayMakanan: ArrayMakanan = [
    { photo: '/makanan/ati.jpg', nama: 'Ati Ampela' },
    { photo: '/makanan/cumi.jpg', nama: 'Cumi Hitam' },
    { photo: '/makanan/ikan Bawal.jpg', nama: 'Ikan Bawal Goreng' },
    { photo: '/makanan/kikil.jpg', nama: 'Kikil' },
    { photo: '/makanan/telor bulet.jpg', nama: 'Telur Balado' },
    { photo: '/makanan/telur-ceplok-kecap-foto-resep-utama.jpg', nama: 'Telur Ceplok' },
    { photo: '/makanan/tempe orek.jpg', nama: 'tempe orek' },
    { photo: "/makanan/teri.jpeg", nama: 'Teri Kacang' },
    { photo: '/makanan/tongkol.jpg', nama: 'Tongkol balado' },
    { photo: '/makanan/ufang.jpg', nama: 'Udang' },
    {photo:'/makanan/usus.jpg', nama:'Usus'}
  ]
  return (
    <div className=" ">
      <Header />
      <Banner />
      <div className=' rounded-lg m-2 bg-gradient-to-l from-zinc-500 to-zinc-800 px-2 flex justify-between '>
        <p className='text-zinc-100 rounded-xl'>Kategori</p>
        <svg className='fill-slate-100 w-3 h-3 mt-[6px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </div>
      <div className="flex gap-4 justify-center">
        <ImageWithCaption url={'/d602f6e126d02c40c19852574a800962.jpg'} text={'Seafood'} />
        <ImageWithCaption url={'/R.jpeg'} text={'Hewani'} />
        <ImageWithCaption url={'/sayur-sop-vegetable-soup-sayur-sop-vegetable-chicken-soup-indonesian-culinary-122954274.jpg'} text={'Nabati'} />
      </div>
      <div className=' rounded-lg m-2 bg-gradient-to-l from-zinc-500 to-zinc-800 px-2 flex justify-between '>
        <p className='text-zinc-100 rounded-xl'>Rekomendasi</p>
        <svg className='fill-slate-100 w-3 h-3 mt-[6px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </div>
      <div className=" overflow-scroll mb-2 grid grid-cols-2 justify-around gap-y-4 grid-flow-row mx-2">
        {arrayMakanan.map((x,i) => {
          return (<DivMakanan key={i} src={x.photo} text={x.nama} />)
      })}

      </div>
      <Footing />
    </div>
  )
}

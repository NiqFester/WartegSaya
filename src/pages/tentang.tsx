import {GetStaticProps} from 'next';
import Header from "@/component/header/header";
import Footing from "@/component/footer/footer";
import Image from 'next/image';
const tentang = ({data}:props) => {
    return (
        <div>
            <Header data={data} />
            <div className="w-screen">
                <div className="w-36 h-36 mt-12 mx-auto">
                    <Image src={'/Prof.jpg'} height={800} width={800} alt='photo' className='w-full h-full rounded-full' />
                </div>
                <p className="font-bold text-2xl text-center mt-2"> Siti Mujenah</p>
                <p className="text-2xl font-sans text-center mx-4 mt-2">Pemilik Warung Makan Warteg?</p>
                <p className="text-2xl font-sans text-justify mx-4 mt-2">Dengan Pengalaman lebih dari 20 tahun akan memberikan rasa masakan yang memenuhi standar warteg</p>
            </div>
            <Footing />
        </div>
    );
}

export const getStaticProps:GetStaticProps = async (ctx) => {
    const { Produk } = await import("../../data/data.json");

    return {
        props:{
            data:Produk
        }
    }
}

export default tentang;
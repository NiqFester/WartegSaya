export default function BannerPesanan({url, text}:{url:string,text:string}) {
  return (
    <div className=" mt-7 bg-cover bg-center h-[25vh]"
    style={{backgroundImage: `url(${url})`}}>
      <div className="w-full h-[25vh] backdrop-brightness-75 pt-6">
        <p className="text-white text-4xl font-serif font-bold text-center mt-10">{text}</p>
      </div>
    </div>
  );
}

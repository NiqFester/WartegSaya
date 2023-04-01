import Link from 'next/link';
function ImageWithCaption({ text, url, link }:{ text:string, url:string, link:string }) {
  return (
    <div
      className={` w-min-[100px] w-max-[150px] h-[140px] bg-cover rounded-lg`}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <Link href={`/kategori/${link}`} className=" rounded-lg backdrop-brightness-50 flex flex-col justify-center w-full h-full">
        <p className="text-center text-white font-serif text-lg">{text}</p>
      </Link>
    </div>
  );
}

export default ImageWithCaption;

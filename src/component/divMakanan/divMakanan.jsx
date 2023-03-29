import Image from "next/image";

export default function DivMakanan({ src, text }) {
  return (
    <div className="flex flex-col w-[170px]  ">
      <Image
        className="rounded-t-lg w-[170px] h-[170px]"
        src={src}
        alt=""
        width={170}
        height={170}
      />
      <div className="flex flex-col text-white rounded-b-lg bg-zinc-900 text-center">
        <p>{text}</p>
        <p>Rp. 5.000,00/ Porsi</p>
      </div>
    </div>
  );
}

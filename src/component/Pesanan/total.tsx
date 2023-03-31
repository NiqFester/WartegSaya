export default function Total({total,pesanWA}:{total:number,pesanWA:string[]}) {
  
  return (
    <>
      <div className="flex justify-between mt-2 mx-4 border-b-black border-b">
        <p>Total</p>
        <p>{formatHarga(total)}</p>
      </div>
      <div className="flex justify-between mt-2 mx-4">
        <div></div>
        <a href={`https://wa.me/6281290167102?text=${pesanWA.join('%0A')}%0ATerima%20Kasih`} className=" rounded-3xl px-2  border-black border  ">
          Pesan
        </a>
      </div>
    </>
  );
}
function formatHarga(x:number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(x);
}
export default function Total({total}:{total:number}) {
  return (
    <>
      <div className="flex justify-between mt-2 mx-4 border-b-black border-b">
        <p>Total</p>
        <p>{formatHarga(total)}</p>
      </div>
      <div className="flex justify-between mt-2 mx-4">
        <div></div>
        <button className=" rounded-3xl px-2  border-black border  ">
          Pesan
        </button>
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
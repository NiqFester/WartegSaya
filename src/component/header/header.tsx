import { useState } from "react";
import MenuLainya from "@/component/header/menuLainya";
import Link from "next/link";
import useSwipe from "@/CustomHook/useSwipe";
interface Produks {
  id: number;
  nama: string;
  photo: string;
  kategori: string;
  harga: number;
}
interface props {
  data: Produks[];
}

const Header = ({ data }: props) => {
  const flags = new Set();
  const tipe = data
    .filter((pd) => {
      if (flags.has(pd.kategori)) {
        return false;
      }
      flags.add(pd.kategori);
      return true;
    })
    .map((x) => {
      return x.kategori;
    });

  
  const [menu, setMenu] = useState([false, false]);
  const [enableSearch, setEnable] = useState(false);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([
    {
      id: 0,
      nama: "tumis kangkung",
      photo: "/makanan/tumisKangkung.webp",
      kategori: "tumis dan oseng",
      harga: 3000,
    },
  ]);


  const SwipeHandler = useSwipe({
    onSwipedLeft: () => {
      if(menu[0]) {
        setMenu((prev) => [!prev[0], prev[1]]);
      }
    },
    onSwipedRight: () => {
      setMenu((prev) => [!prev[0], prev[1]]);
    },
  });

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?search=${search}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSearchData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div {...SwipeHandler}>
      <MenuLainya menu={menu} setMenu={setMenu} tipe={tipe} />
      <div className="w-full m-0 h-10 fixed flex justify-between top-0 z-40 bg-gradient-to-br from-slate-900 to-slate-800 ">
        <div className="flex gap-2">
          <button
            className="w-5 h-5 ml-2 fill-white bg-transparent mt-[8px]"
            onClick={() => {
              setMenu((prev) => [!prev[0], prev[1]]);
            }}
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <Link href={"/"} className="text-white text-lg mt-[5px] ml-1">
            Warteg
          </Link>
        </div>
        <div className="mr-3 relative appearance-none flex mt-1">
          <input
            style={{ display: enableSearch ? "inline" : "none" }}
            className="absolute right-0 pl-5 w-[60vw] focus:outline-none rounded-md mt-1 "
            type="search"
            name="search"
            id="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch();
            }}
          />
          <div
            className="absolute flex border flex-col right-0 top-6 w-[60vw] "
            style={{ display: search ? "block" : "none" }}
          >
            {searchData.map((x, i) => {
              return (
                <Link
                  href={`/kategori/${x.kategori}`}
                  style={{ display: search ? "block" : "none" }}
                  className="bg-white w-full border-t border-t-black "
                  key={i}
                >
                  {x.nama}
                </Link>
              );
            })}
          </div>

          <button
            className="-ml-6 mb-1 hover:fill-blue-400 rounded-none z-50 "
            onClick={() => {
              setEnable((prev) => !prev);
            }}
            style={{ fill: enableSearch ? "#60a5fa" : "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
export function BestSeller() {
  const bestSellerList = [
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
    {
      title: "Xe đạp điện trợ lực",
      image: "3.jpeg",
      link: "/",
    },
  ];
  return (
    <div className="bestSeller md:mt-16">
      <div className="container mx-auto">
        <div className="title relative">
          <span className="md:absolute block bg-[#333] text-[#a1e611] text-3xl px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl italic">
            The world Ebike.com
          </span>
          <span className="md:absolute block uppercase text-center md:text-left mb-2 md:mb-0 italic font-bold right-5 text-base">
            (Bảo hành 2 năm)
          </span>
        </div>
        <div className="grid gap-0 grid-cols-4 mx-4 md:mx-0 md:items-center border-2 border-[#a1e611] px-4 pb-4 pt-4 md:pt-12 rounded-3xl">
          {bestSellerList.map((e, i) => (
            <div className={i<4?"col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-slate-300": "col-span-2 md:col-span-1 text-center border-b border-b-white border-r border-r-slate-300"}>
              <div className="products">
                <Link href="/">
                  <div className="image mb-2.5">
                    <Image
                      src={"/" + e.image}
                      alt={e.title}
                      width={500}
                      height={300}
                      layout="responsive"
                    />
                  </div>
                  <h2 className="font-semibold text-xl">{e.title}</h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

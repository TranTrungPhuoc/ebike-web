import Link from "next/link";
import { categoryHome } from "../service/homeCategory";
import { ORIGINAL_URL } from "../config";
export async function Category() {
  const data_categoryHome = await categoryHome();
  const response_categoryHome = data_categoryHome.response;
  return (
    <div className="bestSeller md:mt-16">
      <div className="container mx-auto">
        <div className="title relative">
          <span className="md:absolute block bg-[#333] font-semibold shadow-md shadow-[#ccc] text-[#a1e611] text-xl px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
            Mua xe là phải vui
          </span>
          <span className="md:absolute block uppercase text-center md:text-left mb-2 md:mb-0 italic font-bold right-5 text-base">
            (Bảo hành 2 năm)
          </span>
        </div>
        <div className="grid gap-0 grid-cols-4 mx-4 md:mx-0 md:items-center border-2 border-[#333] px-2 md:px-4 pb-2 md:pb-4 pt-2 md:pt-12 rounded-3xl">
          {
            response_categoryHome &&
            response_categoryHome.map((e: any, i: any) => (
              <div key={i} className={i < 4 ? "col-span-1 text-center" : "col-span-1 text-center"}>
                <div className="category">
                  <Link href={"/" + e.slug}>
                    <div className="image mb-2.5 text-center">
                      <img src={ORIGINAL_URL + "/uploads/category/" + e.avatar} alt="" className="border border-r-slate-300 p-4 rounded-3xl" />
                    </div>
                    <h2 className="text-[10px] font-semibold md:text-lg">{e.title}</h2>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

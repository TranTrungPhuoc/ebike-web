import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Quên mật khẩu</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Quên Mật Khẩu
                        </span>
                    </h1>
                    <div className="grid gap-4 grid-cols-5 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                        <div className="col-span-5 md:col-span-1"></div>
                        <div className="col-span-5 md:col-span-3 text-sm">
                            <form action="">
                                <div className="mb-4">
                                    <label htmlFor="email" className="mb-2 pl-4 block text-[#6fa400]">Địa Chỉ Email:</label>
                                    <input type="email" id="email" className="border w-full px-4 py-2 rounded-3xl focus:outline-none text-[#333]" placeholder="Ví dụ: xedienvui@gmail.com" />
                                </div>
                                <button type="button" className="border w-full px-4 py-2 rounded-3xl focus:outline-none text-[#333] bg-[#e0e0e0] hover:bg-[#6fa400] hover:border-[#6fa400] hover:text-white">
                                    Xác Nhận
                                </button>
                            </form>
                        </div>
                        <div className="col-span-5 md:col-span-1"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Đăng nhập</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Đăng Nhập
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
                                <div className="mb-4">
                                    <label htmlFor="password" className="mb-2 pl-4 block text-[#6fa400] text-sm">Mật Khẩu:</label>
                                    <input type="password" id="password" className="border w-full px-4 py-2 rounded-3xl focus:outline-none text-[#333]" placeholder="******" />
                                </div>
                                <div className="mb-4 grid gap-4 grid-cols-2">
                                    <div className="text-[#666] ml-2">
                                        <input type="checkbox" /> Duy trì đăng nhập
                                    </div>
                                    <div className="text-right">
                                        <Link href={'/forgotPassword'} className="text-[#6fa400] hover:text-[#666]">Quên mật khẩu?</Link>
                                    </div>
                                </div>
                                <button type="button" className="border w-full px-4 py-2 rounded-3xl focus:outline-none text-[#333] bg-[#e0e0e0] hover:bg-[#6fa400] hover:border-[#6fa400] hover:text-white">
                                    ĐĂNG NHẬP</button>
                                <div className="text-center mt-4">
                                    <h4 className="text-sm italic">or:</h4>
                                    <div className="mt-4">
                                        <button type="button" className="w-full md:w-3/5 bg-[#3b5998] hover:opacity-90 p-2 text-white text-base rounded-3xl">
                                            <span className="mr-4"><i className="fab fa-facebook"></i></span> Facebook
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <button type="button" className="w-full md:w-3/5 bg-[#ea4336] hover:opacity-90 p-2 text-white text-base rounded-3xl">
                                            <span className="mr-4"><i className="fab fa-google"></i></span> Google
                                        </button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <Link href={'/register'} className="text-[#6fa400] hover:text-[#666]">
                                            <i className="fa fa-forward"></i> Đăng ký mới</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-5 md:col-span-1"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
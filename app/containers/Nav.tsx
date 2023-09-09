export function Nav() {
    return (
        <nav className="p-2.5 bg-[#333]">
            <div className="container mx-auto">
                <div className="grid gap-2 grid-cols-12 items-center">
                    <div className="col-span-4 italic uppercase text-[#a1e611] logo">
                        The world Ebike.com
                    </div>
                    <div className="col-span-4">
                        <div className="input-group flex bg-white">
                            <input type="text" className="form-control block focus:outline-none" placeholder="Tìm kiếm" />
                            <button className="btn" type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-3 menu">
                        <ul className="flex justify-evenly">
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase">Sản phẩm</a></li>
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase">Dịch vụ</a></li>
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase">Tin tức</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 cart">
                        <ul className="flex justify-evenly">
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase"><i className="fa-solid fa-user"></i></a></li>
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase"><i className="fa-solid fa-cart-shopping"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
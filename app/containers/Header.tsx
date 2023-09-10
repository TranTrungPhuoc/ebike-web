export function Header() {
    return (
        <header>
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-4 md:grid-cols-9 md:items-center">
                    <div className="col-span-2 text-center md:text-left md:col-span-2 uppercase textOne">
                        <i className="fa fa-phone text-[#333]"></i> Mua hàng: 028 6253 9118
                    </div>
                    <div className="col-span-2 text-center md:text-left md:col-span-3 uppercase textOne">
                        <i className="fa fa-phone text-[#333]"></i> Bảo hành: 028 6253 9118
                    </div>
                    <div className="col-span-2 uppercase text-center text-[#333] font-bold italic bg-[#a1e611] textTwo">
                        The world Ebike.com
                    </div>
                    <div className="col-span-2 uppercase text-center text-[#333] font-bold bg-[#a1e611] textThree">
                        Bảo hành 2 năm
                    </div>
                </div>
            </div>
        </header>
    );
}
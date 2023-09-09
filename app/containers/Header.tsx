export function Header() {
    return (
        <header>
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-9 items-center">
                    <div className="col-span-2 uppercase textOne">
                        <i className="fa fa-phone text-[#a1e611]"></i> Mua hàng: 028 6253 9118
                    </div>
                    <div className="col-span-3 uppercase textOne">
                        <i className="fa fa-phone text-[#a1e611]"></i> Bảo hành: 028 6253 9118
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
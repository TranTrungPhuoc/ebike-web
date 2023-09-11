import Image from "next/image";
export function Tutorial() {
    return (
        <div className="tutorial">
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-4 md:items-center">
                    <div className="col-span-2 md:col-span-1">
                        <div className="posts">
                            <div className="image">
                                <Image
                                    src="/tutorial.jpg"
                                    alt="tutorial.jpg"
                                    width={500}
                                    height={300}
                                    layout="responsive"
                                    className="image"
                                />
                            </div>
                            <div className="uppercase text-sm bg-[#333] text-[#a1e611] p-2">
                                Hướng dẫn sử dụng bộ truyền động xe địa hình
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        Bảo hành: 028 6253 9118
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        The world Ebike.com
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        Bảo hành 2 năm
                    </div>
                </div>
            </div>
        </div>
    );
}
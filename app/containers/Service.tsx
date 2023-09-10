import Image from 'next/image';

export function Service() {
    return (
        <div className="service bg-[#a1e611]">
            <div className="container mx-auto">
                <div className="grid gap-y-8 gap-x-2 grid-cols-4 md:gap-y-2 md:items-center">
                    <div className="col-span-2 md:col-span-1 text-center">
                        <div className="icon">
                            <Image
                                src="/baohanh.png"
                                alt="baohanh.png"
                                width={100}
                                height={100}
                                layout="responsive"
                                className="image"
                            />
                        </div>
                        <h3 className="uppercase text-[#333] font-bold">
                            <span>Bảo hành</span>
                            <span>2 năm</span>
                        </h3>
                        <p>Homesheel quan tâm những điều nhỏ nhất</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center">
                        <div className="icon">
                            <Image
                                src="/247.png"
                                alt="247.png"
                                width={100}
                                height={100}
                                layout="responsive"
                                className="image"
                            />
                        </div>
                        <h3 className="uppercase text-[#333] font-bold">
                            <span>Homesheel</span>
                            <span>hỗ trợ 24/7</span>
                        </h3>
                        <p>Luôn lắng nghe ý kiến của khách hàng ngày càng hoàn thiện hơn</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center">
                        <div className="icon">
                            <Image
                                src="/phanphoi.png"
                                alt="phanphoi.png"
                                width={100}
                                height={100}
                                layout="responsive"
                                className="image"
                            />
                        </div>
                        <h3 className="uppercase text-[#333] font-bold">
                            <span>Phân phối</span>
                            <span>Homesheel</span>
                        </h3>
                        <p>Chính xác hoa hồng ưu đãi cực hấp dẫn cho quý đối tác</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center">
                        <div className="icon">
                            <Image
                                src="/congdong.png"
                                alt="congdong.png"
                                width={100}
                                height={100}
                                layout="responsive"
                                className="image"
                            />
                        </div>
                        <h3 className="uppercase text-[#333] font-bold">
                            <span>Thu cũ</span>
                            <span>đổi mới</span>
                        </h3>
                        <p>Giao lưu và kết nối cộng đồng Homesheel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

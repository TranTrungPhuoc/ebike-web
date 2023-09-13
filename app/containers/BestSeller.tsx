import Image from 'next/image';

export function BestSeller() {
    return (
        <div className="bestSeller md:mt-16">
            <div className="container mx-auto">
                <div className="title relative">
                    <span className="md:absolute block bg-[#333] text-[#a1e611] text-3xl px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl italic">The world Ebike.com</span>
                    <span className="md:absolute block uppercase text-center md:text-left mb-2 md:mb-0 italic font-bold right-5 text-base">(Bảo hành 2 năm)</span>
                </div>
                <div className="grid gap-0 grid-cols-4 mx-4 md:mx-0 md:items-center border-2 border-[#a1e611] px-4 pb-4 pt-4 md:pt-12 rounded-3xl">
                    <div className="col-span-2 md:col-span-1 border-r border-b border-r-slate-300 border-b-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 md:border-r border-b md:border-r-slate-300 border-b-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-r border-b border-r-slate-300 border-b-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-b border-b-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-b border-b-slate-300 md:border-b-0 border-r border-r-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-b border-b-slate-300 md:border-b-0 md:border-r md:border-r-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-r border-r-slate-300 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-center">
                        <div className="products">
                            <a href="">
                                <div className="image mb-2.5">
                                    <Image
                                        src="/3.jpeg"
                                        alt="3.jpeg"
                                        width={500}
                                        height={300}
                                        layout="responsive"
                                        className="image"
                                    />
                                </div>
                                <h2 className="font-semibold text-xl">Xe đạp điện trợ lực</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
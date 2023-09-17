import Image from 'next/image';
import Link from 'next/link'
export function Main() {
    const productList = [
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'}
    ]
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    }
    return (
        <div className="main mt-7 mb-7">
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-4 md:items-center">
                    {
                        productList.map((e, i)=>(
                            <div key={i} className={i==3 || i==7 || i==11 ? "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-white": "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-slate-300"}>
                                <div className="products p-4">
                                    <Link href="/product.html" className="text-[#333]">
                                        <div className="image">
                                            <Image
                                                src={'/' + e.image}
                                                alt={e.title}
                                                width={100}
                                                height={100}
                                                layout="responsive"
                                            />
                                        </div>
                                        <h3 className="text-sm mb-2 font-semibold text-[#626262]">{e.title}</h3>
                                        <p className="text-xs mb-4">{e.description}</p>
                                        <div className="price font-bold mb-7 text-xl">{formattedNumber(e.price)}</div>
                                        <div className="selled">
                                            <span className="bg-[#333] text-[#a1e611] rounded text-base relative">
                                                <Image
                                                    src="/fire.webp"
                                                    alt="fire.webp"
                                                    width={45}
                                                    height={45}
                                                />
                                                Đã bán {e.selled + '/' + e.inventory}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="more text-center mt-7 py-2.5">
                    <Link href="/" className="text-[#ccc] hover:text-[#333] hover:bg-[#efefef] delay-0 duration-300 border border-[#ccc] px-10 py-2.5 no-underline rounded-xl uppercase">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    )
}

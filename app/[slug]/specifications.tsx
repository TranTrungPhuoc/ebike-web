export function Specifications(props: any) {
    const detail = props.data;
    return (
        <div className="col-span-12 order-1 lg:order-2 md:col-span-4 addSpecifications">
            <div className="border-2 border-[#6fa400] rounded-3xl py-8 px-4 mt-8 mb-2 md:mb-0 md:mt-12 relative sticky top-20">
                <h3 className="bg-[#333] text-[#a1e611] absolute rounded-lg px-4 py-2 uppercase specifications text-center font-semibold">
                    Thông số kỹ thuật
                </h3>
                <div className="h-[400px] overflow-auto" dangerouslySetInnerHTML={{ __html: detail && detail.specifications }}></div>
                {/* <div className="text-center mt-4">
                    <a
                        href=""
                        className="bg-[#333] text-white hover:text-[#a1e611] py-2 px-4 rounded"
                    >
                        Xem thêm
                    </a>
                </div> */}
            </div>
        </div>
    )
}
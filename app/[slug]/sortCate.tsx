export function SortCate() {
    return (
        <div className="basis-1/4 mx-4 md:mx-0 flex flex-row">
            <form action="" className="basis-4/5 text-sm">
                <select name="sort" id="sort" className="bg-[#e0e0e0] p-2 rounded">
                    <option value="0">Theo thứ tự phổ biến</option>
                    <option value="1">Giá: Từ A - Z</option>
                </select>
            </form>
            {/*  onClick={() => handleTabClick()} */}
            {/* <div className={(!status ? "bg-[#a1e611] text-[#333]" : "bg-[#333] text-[#fff]") + " md:hidden p-2 basis-1/5 text-center rounded"}>
                                        <i className={!status ? "fa-solid fa-bars" : "fa fa-close"}></i>
                                    </div> */}
        </div>
    )
}
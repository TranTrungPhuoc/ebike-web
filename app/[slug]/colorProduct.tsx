export function ColorProduct(props: any){
    const detail = props.data;
    return (
        <div className="mb-4 items-center border p-1 bg-[whitesmoke] rounded">
            <div className="text-[#919191] mb-2 text-xs font-bold">
                Màu sắc:
            </div>
            <div className="grid gap-1 grid-cols-7">
                {
                    detail.color.map((c: any, ci: any) =>
                        <div key={ci} className={"bg-[#fff] hover:bg-[#fff] text-[#919191] p-2 rounded hover:text-[#000] cursor-pointer text-[12px] " + (c.title.split(' ').length > 2 ? "col-span-3" : "col-span-2")}>
                            <input type="checkbox" name="color" id={"color_" + ci} />
                            <label htmlFor={"color_" + ci} className="ml-1">{c.title}</label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
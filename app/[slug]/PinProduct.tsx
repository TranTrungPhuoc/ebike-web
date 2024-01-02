export function PinProduct(props: any) {
    const detail = props.data;
    return (
        <div className="items-center border p-1 bg-[whitesmoke] rounded">
            <div className="text-[#919191] mb-2 text-xs font-bold">
                Pin:
            </div>
            <div className="grid gap-1 grid-cols-3">
                {
                    detail.pin.map((p: any, pi: any) =>
                        <div key={pi} className="col-span-1 bg-[#fff] hover:bg-[#fff] text-[#919191] p-2 rounded hover:text-[#000] cursor-pointer text-[12px]">
                            <input type="checkbox" name="color" id={"pin_" + pi} />
                            <label htmlFor={"pin_" + pi} className="ml-1">{p.title}</label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
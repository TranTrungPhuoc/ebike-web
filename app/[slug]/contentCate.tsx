import { SloganContent } from "../components/SloganContent";
export function ContentCate(props: any) {
    const data = props.data;
    return (
        <>
            <SloganContent />
            <input type="checkbox" id="more" />
            <div className="content mt-10 text-[#666] px-4 leading-6 text-justify h-[400px] overflow-hidden" dangerouslySetInnerHTML={{ __html: data }}></div>
            <div className="text-center relative readmore">
                <label htmlFor="more" className="border py-2 px-8 inline-block rounded hover:bg-[#6fa400] hover:text-white cursor-pointer"></label>
            </div>
        </>
    )
}
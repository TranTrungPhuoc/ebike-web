import Link from 'next/link';
import FormattedNumber from '../feed/formattedNumber';
import { MoreProductCate } from './moreProductCate';
import { ContentCate } from './contentCate';
import { SortCate } from './sortCate';
export function MainCate(props: any) {
    const detail = props.data;
    return (
        <div className="md:col-span-9">
            <div className="md:flex flex-row">
                <h1 className="basis-3/4 text-2xl pl-4 pt-0 pb-4 font-semibold text-[#333]">
                    {detail && detail.listData.title}
                </h1>
                <SortCate />
            </div>
            <hr className="mt-4 md:mt-0" />
            <div className="grid gap-0 grid-cols-4 md:grid-cols-3 md:items-center">
                {
                    detail && detail.listData.Products.map((e: any, i: any) => (
                        <div key={i} className={i == 2 || i == 5 || i == 8 || i == 11 ? "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-white" : "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-slate-300"}>
                            <div className="products p-4">
                                <Link href={"/" + e.slug + ".html"} className="text-[#333]">
                                    <div className="image">
                                        <img src={e.avatar} alt="" width={500} />
                                    </div>
                                    <h3 className="text-sm mb-2 font-semibold text-[#626262]">{e.title}</h3>
                                    <p className="text-xs mb-4">{e.description}</p>
                                    <div className="price font-bold mb-7 text-xl">{FormattedNumber(e.price)}</div>
                                    <div className="mt-2 grid gap-2 grid-cols-2 text-[10px] md:text-xs">
                                        <div className="col-span-1 text-[#6fa400] text-left">
                                            <span>4.3</span>
                                            <span className="ml-[5px]"><i className='fa fa-star'></i></span>
                                            <span className="ml-[5px] text-[#999]">(316)</span>
                                        </div>
                                        <div className="col-span-1 text-[#999] text-right">
                                            21 đã bán
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                {detail && props.data.total > props.data.limit && <MoreProductCate data={props.data.listData} slug={props.slug} limit={props.data.limit}/>}
            </div>
            {detail && detail.listData.content && <ContentCate data={detail.listData.content} />}
        </div>
    )
}
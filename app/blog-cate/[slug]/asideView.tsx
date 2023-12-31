import Link from 'next/link'
export function AsideView(props: any) {
    const viewMore = props.viewMore;
    return (
        <div className="">
            <h2 className="font-semibold text-lg text-[#333]">Xem Nhiều</h2>
            {
                viewMore.map((e:any, i:any) => (
                    <div key={i} className="mb-2">
                        <Link href={'/blog/' + e.slug + '.html'}>
                            <div className="flex flex-row">
                                <div className="basis-1/3">
                                    <img src={e.avatar} alt="" width={200} className="rounded-t" />
                                </div>
                                <div className="basis-2/3 ml-2">
                                    <h3 className="text-[11px] font-semibold hover:text-[#6fa400]">{e.title}</h3>
                                    <div className="text-[10px] text-[#919191]"><i className="fa fa-calendar"></i> { e.created.split('T')[0] + ' ' + e.created.split('T')[1].split(':')[0] + ':' + e.created.split('T')[1].split(':')[1]}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
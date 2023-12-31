import Link from 'next/link';
const Breadcrumbs = (props: any) => {
    return (
        <div className="breadcrumbs">
            <div className="container mx-auto">
                <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                    <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                    {
                        props.bredcrumbs &&
                        props.bredcrumbs.map((e:any, i:any)=>
                            props.bredcrumbs.length != (i+1) ? (
                                <li key={i}><Link href={"/" + e.slug}>{e.title}</Link></li>
                            ): (
                                <li key={i} className="text-[#6fa400]">{e.title}</li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
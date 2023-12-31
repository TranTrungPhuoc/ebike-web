import { notFound } from 'next/navigation';
import { categoryDetailPost } from '../../service/categoryDetailPost';
import { menuCategory } from '../../service/menuCategory';
import { categoryViewMore } from '../../service/categoryViewMore';
import { AsideCate } from './asideCate';
import { AsideView } from './asideView';

import Breadcrumbs from '../../components/Bredcrumb';
import Link from 'next/link';

export async function Category(props: any) {
    let detail: any;
    let aside: any;
    let viewMore: any;

    try {
        const _categoryDetailPost = await categoryDetailPost(props.slug)
        if (!_categoryDetailPost.response.listData.title) { notFound(); }
        detail = _categoryDetailPost.response.listData

        const _menuCategory = await menuCategory()
        aside = _menuCategory.response[1]

        const _categoryViewMore = await categoryViewMore(props.slug);
        viewMore = _categoryViewMore.response;
    } catch (error) {
        console.log(error);
    }

    return (
        <main>
            {detail && <Breadcrumbs bredcrumbs={detail.bredcrumbs} />}
            <div className="video store mt-4">
                <div className="container mx-auto">
                    <h1 className="title md:mt-12 relative">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            {detail && detail.title}
                        </span>
                    </h1>
                    <div className="p-2 md:p-0 grid gap-4 md:grid-cols-4 md:border-t md:border-[#333] md:pt-12">
                        <div className="md:col-span-3">
                            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                                {
                                    detail && detail.Posts.map((e: any, i: any) => (
                                        <div key={i} className="col-span-1">
                                            <div className="post rounded border bg-[#f5f5f5] hover:duration-300">
                                                <Link href={"/video/" + e.slug + ".html"}>
                                                    <div className="image relative">
                                                        <img src={e.avatar} alt="" width={700} className="rounded-t" />
                                                        <span className="bg-white border px-2.5 py-1 rounded-lg absolute text-[#c50000] text-center opacity-90 top-1/2 left-1/2">
                                                            <i className="fa-brands fa-youtube fa-2x"></i>
                                                        </span>
                                                    </div>
                                                    <div className="text-[#333] p-4 rounded-b">
                                                        <h3 className="mb-2 font-semibold">{e.title}</h3>
                                                        <div className="mb-2 text-xs text-[#919191]"><i className="fa fa-calendar"></i> { e.created.split('T')[0] + ' ' + e.created.split('T')[1].split(':')[0] + ':' + e.created.split('T')[1].split(':')[1]}</div>
                                                        <p className="text-xs text-[#333] text-justify">{e.description}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                detail && detail.Posts.length > 12 &&
                                <div className="text-center mt-4">
                                    <button type="button" className="border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white">Xem Thêm</button>
                                </div>
                            }
                        </div>
                        <div className="md:col-span-1 postSidebar">
                            {aside && <AsideCate aside={aside} />}
                            {viewMore && <AsideView viewMore={viewMore} />}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
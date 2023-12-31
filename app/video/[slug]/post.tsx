import { postDetail } from '../../service/postDetail';
import { postRelative } from '../../service/postRelative';

import { ViewMore } from './viewMore';
import { Relative } from './relative';
import { notFound } from 'next/navigation';

import Breadcrumbs from '../../components/Bredcrumb';

export async function Post(props: any) {
    const slug = props.slug;

    let detail: any;
    let relative: any;
    let viewMore: any;

    try {
        const _postDetail = await postDetail(slug);
        if (_postDetail.response.length == 0) { notFound(); }
        detail = _postDetail.response[0];

        const _postRelative = await postRelative(slug);
        relative = _postRelative.response[0].Posts;
        viewMore = _postRelative.response[0].Posts;
    } catch (error) {
        console.log(error);
    }

    return (
        <main>
            {detail && <Breadcrumbs bredcrumbs={detail.bredcrumbs} />}
            <div className="store mt-4">
                <div className="container mx-auto">
                    <h1 className="title md:mt-12 relative">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            {detail && detail.title}
                        </span>
                    </h1>
                    <div className="p-2 md:p-0 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0 md:border-t md:border-[#333]">
                        {
                            detail && detail.content &&
                            <>
                                <div className="col-span-12 md:col-span-9">
                                    <div className="content md:mt-10 text-[#666] leading-6 text-justify" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
                                </div>
                                <div className="col-span-12 md:col-span-3 index">
                                    <div className="hidden md:block md:mt-10 md:sticky md:top-20">
                                        <h4 className="uppercase font-semibold text-center text-lg mb-2 text-[#333]">Mục Lục</h4>
                                        <div className="mt-2 text-sm border border-[#6fa400] pt-4 p-2 bg-[#f5f5f5] rounded index" dangerouslySetInnerHTML={{ __html: detail.index }}></div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {relative && <Relative data={relative} />}
                    {viewMore && <ViewMore data={viewMore} />}
                </div>
            </div>
        </main>
    )
}
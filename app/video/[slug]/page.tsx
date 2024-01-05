import { Suspense } from 'react'

import { Post } from "./post";
import { postDetail } from '../../service/postDetail';
import { Metadata, ResolvingMetadata } from 'next'
import Loading from '../../feed/Loading';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug
    const slug_rm_html = slug.toString().replace(".html", "");
    const _postDetail = await postDetail(slug_rm_html);
    const detail = _postDetail.response[0];
    return {
        title: detail.metaTitle!=''?detail.metaTitle:detail.title,
        description: detail.metaDescription
    }
}

export default async function Page({ params }: Props) {
    const slug = params.slug
    const slug_rm_html = slug.toString().replace(".html", "");
    return (
        <Suspense fallback={<Loading />}>
            <Post slug={slug_rm_html} />
        </Suspense>
    );
}
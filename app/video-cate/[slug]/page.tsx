import { Suspense } from 'react'

import { categoryDetailPost } from '../../service/categoryDetailPost';
import { Category } from './category';
import { Metadata, ResolvingMetadata } from 'next';
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

    const _categoryDetailPost = await categoryDetailPost(slug)
    const detail = _categoryDetailPost.response.listData

    return {
        title: detail.metaTitle??detail.title,
        description: detail.metaDescription
    }
}

export default async function Page({ params }: Props) {
    return (
        <Suspense fallback={<Loading />}>
            <Category slug={params.slug} />
        </Suspense>
    )
}
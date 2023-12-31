import { categoryDetail } from '../service/categoryDetail';
import { menuCategory } from '../service/menuCategory';
import { colorGetList } from '../service/colorGetList';
import { pinGetList } from '../service/pinGetList';
import { AsideCate } from './asideCate';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../components/Bredcrumb';
import { MainCate } from './mainCate';

export async function Category(props: any) {
    const slug = props.slug;

    let detail: any;
    let asideCate: any;
    let asideColor: any;
    let asidePin: any;

    try {
        const _categoryDetail = await categoryDetail(slug)
        if (!_categoryDetail.response.listData.title) { notFound(); }
        detail = _categoryDetail.response

        const _menuCategory = await menuCategory();
        asideCate = _menuCategory.response[0].childs

        const _colorGetList = await colorGetList();
        asideColor = _colorGetList.response

        const _pinGetList = await pinGetList();
        asidePin = _pinGetList.response
    } catch (error) {
        console.log(error);
    }

    return (
        <main>
            <Breadcrumbs bredcrumbs={detail && detail.listData.bredcrumbs} />
            <div className="category mt-4">
                <div className="container mx-auto">
                    <div className="grid gap-2 md:grid-cols-12">
                        <AsideCate asideCate={asideCate} asideColor={asideColor} asidePin={asidePin} />
                        <MainCate data={detail && detail} slug={slug} />
                    </div>
                </div>
            </div>
        </main>
    )
}
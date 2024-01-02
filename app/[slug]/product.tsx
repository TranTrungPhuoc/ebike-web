import TabProducts from "../components/TabProducts";
import TabContents from "./TabContents";
import { productDetail } from "../service/productDetail";
import { productRelative } from "../service/productRelative";
import { Relative } from "./relative";
import { ViewMore } from "./viewMore";
import Breadcrumbs from '../components/Bredcrumb';
import { ProductMain } from "./productMain";
import { Advertisement } from "./advertisement";
import { Specifications } from "./specifications";
export async function Product(props: any) {
  const slug = props.slug;
  let detail: any;
  let relative: any;
  try {
    const _productDetail = await productDetail(slug);
    detail = _productDetail.response[0];
    const _productRelative = await productRelative(slug);
    relative = _productRelative.response[0].Products;
  } catch (error) {
    console.log(error);
  }
  return (
    <main>
      <Breadcrumbs bredcrumbs={detail.bredcrumbs} />
      <div className="container mt-4 mx-auto">
        <div className="p-2 md:p-0 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0">
          <TabProducts data={detail} />
          <ProductMain data={detail} />
          <Advertisement />
        </div>
        {
          detail.content &&
          <div className="p-2 md:p-0 border-t-2 border-gray-300 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0">
            <TabContents data={detail} />
            <Specifications data={detail} />
          </div>
        }
        {relative.length>0 && <Relative data={relative} />}
        {relative.length>0 && <ViewMore data={relative} />}
      </div>
    </main>
  );
}

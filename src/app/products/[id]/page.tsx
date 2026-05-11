import ProductsClient from "@/app/products/ProductsClient";
import {getProductById} from "@/services/product.service";

export const dynamic = "force-dynamic";
export default async function Page({ params }: { params: { id: Number } }) {
    const { id } = await params;
    const productDetail = await getProductById(id);
    console.log("page.tsx of products", productDetail.item);

    return <>
        <ProductsClient initialDetailProducts={productDetail.item}/>
    </>
}
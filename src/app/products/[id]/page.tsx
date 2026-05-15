import ProductsClient from "@/app/products/ProductsClient";
import {getProductById} from "@/services/product.service";

export default async function Page({ params }: { params: { id: Number } }) {
    const { id } = await params;
    const productDetail = await getProductById(id);

    return <>
        <ProductsClient initialDetailProducts={productDetail.item}/>
    </>
}
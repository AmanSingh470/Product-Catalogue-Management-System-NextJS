import ProductsClient from "@/app/products/ProductsClient";
import {getProductById} from "@/services/product.service"

export default async function Page({ params }: { params: { id: Number } }) {
    const { id } = await params;
    const product_detail = await getProductById(1);
    // console.log(product_detail);

    return <>
    <ProductsClient/>
    </>
}
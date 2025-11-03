import ProductDetails from "./product-details"

export default async function ProductDetailPage({params})
{
    const {slug} = await params;

    return(
        <div>
            <ProductDetails slug={slug}></ProductDetails>
        </div>
    )
}
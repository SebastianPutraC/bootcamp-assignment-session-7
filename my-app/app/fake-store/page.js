import ProductList from "@/app/fake-store/product-list";

export default async function StorePage()
{
    const storeRes = await fetch('https://fakestoreapi.com/products');
    const storeData = await storeRes.json();
    const firstFiveProduct = storeData.slice(0, 5);


    return(
        <>
            <div>
                <ProductList items={firstFiveProduct}/>
            </div>
        </>
    )
}
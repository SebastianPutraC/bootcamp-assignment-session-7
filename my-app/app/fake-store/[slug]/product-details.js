'use client'

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function ProductDetail({slug} )
{
    const [data, setData] = useState()
    const router = useRouter();
    useEffect(() => {
        const getDetail = async () =>
        {
            const detailRes =
                await fetch(`https://fakestoreapi.com/products/${slug}`)
            const detailData = await detailRes.json();
            setData(detailData)
        }
        getDetail()
    }, [slug]);

    return(
        <>
            <div className='headerContainer'>
                <button onClick={() => router.push(`/fake-store`)}
                        className='buttonStyle'>Home</button>
                <button onClick={() => router.push(`/fake-store/contact`)}
                        className='buttonStyle'>Contact</button>
            </div>
            <div className='listContainer'>
                <div>
                    <h2 className='titleText'>Title</h2>
                    <div>{data && data.title}</div>
                </div>
                <div>
                    <h2 className='titleText'>Price</h2>
                    <div>{data && data.price}</div>
                </div>
                <div>
                    <h2 className='titleText'>Description</h2>
                    <div>{data && data.description}</div>
                </div>
                <div>
                    <h2 className='titleText'>Category</h2>
                    <div>{data && data.category}</div>
                </div>

            </div>
        </>
    )
}
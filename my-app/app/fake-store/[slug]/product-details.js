'use client'

import {useEffect, useState} from "react";

export default function ProductDetail({slug} )
{
    const [data, setData] = useState()
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
        <div>
            <div>
                <label>Title</label>
                <div>{data && data.title}</div>
            </div>
            <div>
                <label>Price</label>
                <div>{data && data.price}</div>
            </div>
            <div>
                <label>Description</label>
                <div>{data && data.description}</div>
            </div>
            <div>
                <label>Category</label>
                <div>{data && data.category}</div>
            </div>

        </div>
    )
}
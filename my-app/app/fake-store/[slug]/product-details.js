'use client'

import {useEffect, useState, useRef} from "react";
import {useRouter} from "next/navigation";

export default function ProductDetail({slug} )
{
    const [data, setData] = useState()
    const [favorites, setFavorites] = useState(0)
    const favButton = useRef(null)

    const router = useRouter();
    const changeFavorite = () =>
    {
        if (favorites === 1)
        {
            setFavorites(0)
        }
        else
        {
            setFavorites(1);
        }
    }

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

    useEffect(() => {
        if (favorites === 1)
        {
            favButton.current.style.background = 'red';
            favButton.current.textContent = 'Unfavourite';
        }
        else
        {
            favButton.current.style.background = 'white';
            favButton.current.textContent = 'Favourite';
        }
    })

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
                    <div>{data && data.name}</div>
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
                <button ref={favButton} onClick={() => {changeFavorite()}}
                        className='buttonStyle'></button>
            </div>
        </>
    )
}
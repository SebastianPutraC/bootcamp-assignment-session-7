'use client'

import {useRouter} from "next/navigation";
import Image from "next/image";

export default function ProductList({items}) {
    const router = useRouter();

    const viewDetail= (productId) =>{
        router.push(`/fake-store/${productId}`)
    }

    return(
        <div>
            Store Page
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>View Details Button</th>
                </tr>
                </thead>
                <tbody>
                {items && items.map(products=> (
                    <tr key={products.id}>
                        <td>
                            <Image src={products.image} alt="productImage" width={50} height={50}>
                            </Image>
                        </td>
                        <td>{products.title}</td>
                        <td>
                            <button onClick={() => viewDetail(products.id)}>
                                View Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
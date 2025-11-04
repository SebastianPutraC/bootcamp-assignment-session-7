'use client'

import {useRouter} from "next/navigation";
import Image from "next/image";

export default function ProductList({items}) {
    const router = useRouter();
    let productList = items;

    function searchTable()
    {
        console.log(searchTable);
        let query = document.getElementById("searchQuery").value;

        let foundSearch = null;
        foundSearch = linearSearch(productList, query)

        let container = document.getElementById("foundSearch");
        container.textContent = "";

        let resultText = document.createElement("h3")
        container.appendChild(resultText);
        if (foundSearch == null)
        {
            resultText.textContent = "Failed to search the query";
        }
        else
        {
            viewDetail(foundSearch.id)
        }
    }

    function linearSearch(array, query)
    {
        let foundSearch = null;
        for (let i = 0; i < array.length; i++)
        {
            if (array[i].title === query)
            {
                foundSearch = array[i];
                return foundSearch;
            }
        }
        return foundSearch;
    }

    const viewDetail= (productId) =>{
        router.push(`/fake-store/${productId}`)
    }

    return(
        <>
            <div className='headerContainer'>
                <button onClick={() => router.push(`/fake-store`)}
                        className='buttonStyle'>Home</button>
                <button onClick={() => router.push(`/fake-store/contact`)}
                        className='buttonStyle'>Contact</button>
            </div>
            <div id="foundSearch">

            </div>
            <div>
                <label>Search Name:</label>
                <input style={{ backgroundColor: 'white'}} type="text" id="searchQuery" name="searchQuery"/>
                <br/>
                <button style={{ backgroundColor: 'yellow'}} className='buttonStyle'
                        onClick={() => searchTable()}>Search</button>
            </div>
            <div className='listContainer'>
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
                                <button className='buttonStyle' onClick={() => viewDetail(products.id)}>
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
'use client'

import {useRouter} from "next/navigation";

export default function ContactPage()
{
    const router = useRouter();

    return(
        <>
            <div className='headerContainer'>
                <button onClick={() => router.push(`/fake-store`)}
                        className='buttonStyle'>Home
                </button>
                <button onClick={() => router.push(`/fake-store/contact`)}
                        className='buttonStyle'>Contact
                </button>
            </div>
            <div className='listContainer'>
                <div>
                    <h2 className='titleText'>Company Name</h2>
                    <div>Fake Store Company</div>
                </div>
                <div>
                    <h2 className='titleText'>Phone Number</h2>
                    <div>1234567890</div>
                </div>
                <div>
                    <h2 className='titleText'>Email</h2>
                    <div>fakestorecompany@gmail.com</div>
                </div>
                <div>
                    <h2 className='titleText'>Address</h2>
                    <div>Jakarta</div>
                </div>
            </div>
        </>
    )
}
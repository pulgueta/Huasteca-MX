import React from 'react'
import { useNavigate } from 'react-router-dom';

import Nani from "../../static/nani.jpg";
import Nani2 from "../../static/nani2.jpg";
import Nani3 from "../../static/nani3.jpg";
import Nani4 from "../../static/nani4.jpg";
import Nani5 from "../../static/nani5.jpeg";

export const Article = () => {

    const navigate = useNavigate()

    const fakeData = [
        {
            id: '1',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aperiam nemo soluta officiis dignissimos libero accusantium quas assumenda doloribus blanditiis quia maiores cumque, velit repellat ipsa cum. Possimus, et.',
            dateLastUpdate: new Date(),
            img: Nani
        },
        {
            id: '2',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aperiam nemo soluta officiis dignissimos libero accusantium quas assumenda doloribus blanditiis quia maiores cumque, velit repellat ipsa cum. Possimus, et.',
            dateLastUpdate: new Date(),
            img: Nani2
        },
        {
            id: '3',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aperiam nemo soluta officiis dignissimos libero accusantium quas assumenda doloribus blanditiis quia maiores cumque, velit repellat ipsa cum. Possimus, et.',
            dateLastUpdate: new Date(),
            img: Nani3
        },
        {
            id: '4',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aperiam nemo soluta officiis dignissimos libero accusantium quas assumenda doloribus blanditiis quia maiores cumque, velit repellat ipsa cum. Possimus, et.',
            dateLastUpdate: new Date(),
            img: Nani4
        },
        {
            id: '5',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aperiam nemo soluta officiis dignissimos libero accusantium quas assumenda doloribus blanditiis quia maiores cumque, velit repellat ipsa cum. Possimus, et.',
            dateLastUpdate: new Date(),
            img: Nani
        },
        {
            id: '6',
            title: 'Lorem ipsum dolor sit amet.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aperiam nemo soluta officiis dignissimos libero accusantium quas assumenda doloribus blanditiis quia maiores cumque, velit repellat ipsa cum. Possimus, et.',
            dateLastUpdate: new Date(),
            img: Nani5
        },
    ]

    return (
        <div className='h-full py-10 px-5 bg-neutral-400 flex flex-col items-center md:px-10 md:h-full md:py-20 lg:h-full lg:grid lg:grid-cols-3 lg:gap-5'>
            {fakeData && fakeData.map((item, i) => {
                return (
                    <div key={item.id + i} className={'bg-neutral-500 rounded-xl shadow-2xl w-full mb-5'}>
                        <div className='flex'>
                            <div>
                                <img src={item.img} alt="Portada" className='h-full w-[700px] md:w-[900px] object-cover object-center overflow-hidden rounded-l-lg' />
                            </div>
                            <div className='p-4'>
                                <div className='text-base font-bold md:text-2xl'>
                                    {item.title}
                                </div>
                                <div className='mt-2 text-xs font-medium md:text-base'>
                                    {item.description}
                                </div>
                                <div className='mt-3 text-xs font-medium md:text-base'>
                                    <p className='font-bold'>Ultima actualización:</p>
                                    <p>
                                        {item.dateLastUpdate.toString()}
                                    </p>
                                </div>
                                <div className='flex justify-end py-2'>
                                    <button className='bg-huasteca-orange rounded-md p-2 mt-2 text-sm font-semibold md:text-lg' onClick={() => navigate(`/articulos/${item.id}`)}>
                                        Saber más
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

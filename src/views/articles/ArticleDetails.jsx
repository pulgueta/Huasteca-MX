import { useEffect, useState } from 'react';
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Nani from "../../static/nani.jpg";
import Nani2 from "../../static/nani2.jpg";
import Nani3 from "../../static/nani3.jpg";
import Nani4 from "../../static/nani4.jpg";
import Nani5 from "../../static/nani5.jpeg";

export const ArticleDetails = () => {

    const { id } = useParams();

    const [article, setArticle] = useState({})

    useEffect(() => {
        const getData = () => {
            const obj = {
                id: id,
                title: `Mobiliario urbano - Asiento ${id}`,
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptate dolore culpa explicabo unde magni illum assumenda, similique ipsum distinctio quos eos aspernatur laborum sint doloremque, facilis iusto cum perferendis?',
                gallery: [
                    Nani,
                    Nani2,
                    Nani3,
                    Nani4,
                    Nani5
                ]
            }
            setArticle(obj)
        }
        getData()
    }, [id])


    return (
        <>
            <div className='h-full py-10 px-5 bg-neutral-400 flex flex-col items-center md:px-10 md:justify-center md:h-screen md:py-20 lg:h-full'>
                <h1 className="text-white text-xl my-5 font-medium md:text-4xl md:my-10">
                    {article.title}
                </h1>
                <p className="text-base md:text-xl">
                    {article.description}
                </p>
                <div className='flex flex-col pt-5 divide-y divide-neutral-500 divide-solid md:flex-row md:divide-x md:divide-y-0 md:py-10'>
                    <div className='flex py-2 items-center md:px-2'>
                        <FaBook className='text-4xl' />
                        <p className='ml-2 md:ml-4'>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='flex py-2 items-center md:px-2'>
                        <FaCalendarAlt className='text-4xl' />
                        <p className='ml-2 md:ml-4'>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='flex py-2 items-center md:px-2'>
                        <FaUsers className='text-4xl' />
                        <p className='ml-2 md:ml-4'>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <h1 className="text-white text-2xl mt-5 font-medium md:text-4xl md:mt-10">
                    Galeria del articulo
                </h1>
                <div className='w-screen h-full pb-2 m-5 overflow-x-hidden md:py-0'>
                    <motion.div className='flex cursor-grab' drag={'x'} dragConstraints={{ right: 0, left: -1594 }}>
                        {article.gallery && article.gallery.map((item, i) => {
                            return (
                                <div key={i} className='h-[15rem] min-w-[25rem] p-4 md:h-96 md:min-w-[30rem] lg:min-w-[45rem]'>
                                    <img src={item} alt="tour" className='h-full w-full pointer-events-none object-cover rounded-md' />
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </>
    )
}

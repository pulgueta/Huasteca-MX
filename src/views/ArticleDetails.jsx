import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { Carousel } from "react-responsive-carousel";

import Nani from "../static/nani.jpg";
import Nani2 from "../static/nani2.jpg";
import Nani3 from "../static/nani3.jpg";
import Nani4 from "../static/nani4.jpg";

export const ArticleDetails = () => {
    return (
        <div className='h-full py-10 px-5 bg-neutral-400 flex flex-col items-center md:px-10 md:justify-center md:h-screen md:py-20 lg:h-full'>
            <h1 className="text-white text-xl my-5 font-medium md:text-4xl md:my-10">
                Mobiliario urbano - Asiento 009
            </h1>
            <p className="text-base md:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptate dolore culpa explicabo unde magni illum assumenda, similique ipsum distinctio quos eos aspernatur laborum sint doloremque, facilis iusto cum perferendis?
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
            <h1 className="text-white text-2xl my-5 font-medium md:text-4xl md:my-10">
                Galeria del articulo
            </h1>
            <div className='p-8'>
                <Carousel className='bg-neutral-400 flex flex-col text-center w-72 md:w-[700px] lg:w-[900px]' autoPlay={true} emulateTouch={true} infiniteLoop={true}>
                    <div>
                        <img src={Nani} alt="Nanisita" />
                    </div>
                    <div>
                        <img src={Nani2} alt="Nanisita" />
                    </div>
                    <div>
                        <img src={Nani3} alt="Nanisita" />
                    </div>
                    <div>
                        <img src={Nani4} alt="Nanisita" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

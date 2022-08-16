import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { queryDoc } from '../../utils/firebase';

export const CulturalTourDetails = () => {

    const { id } = useParams();

    const [tour, setTour] = useState({})

    useEffect(() => {
        const getData = async () => {
            const doc = await queryDoc('places', id)
            const docData = doc?.data()
            const obj = {
                id: id,
                lugar: docData.place,
                description: docData.description,
                gallery: docData.images,
                dateCreate: docData.date,
                autores: docData.detected
            }
            setTour(obj)
        }
        getData()
    }, [id])

    return (
        <div className='h-screen bg-neutral-400 flex flex-col items-center jus md:px-10 md:justify-center md:h-screen md:py-20 lg:h-full'>
            <motion.div className='w-screen h-full py-10 m-10 overflow-x-hidden md:py-0'>
                {/* <motion.div className='flex cursor-grab' drag={'x'} dragConstraints={{ right: 0, left: -1594 }}>
                    {tour.gallery && tour.gallery.map((item, i) => {
                        return (
                            <div key={i} className='h-[15rem] min-w-[25rem] p-4 md:h-96 md:min-w-[30rem] lg:min-w-[45rem]'>
                                <img src={item} alt="tour" className='h-full w-full pointer-events-none object-cover rounded-md' />
                            </div>
                        )
                    })}
                </motion.div> */}
                <div className='py-2 px-5'>
                    <div className="flex w-full overflow-auto h-[15rem] md:h-96 px-5">
                        {tour.gallery && tour.gallery.map((item, i) => {
                            return (
                                <img key={i} src={item} className={'w-full'} alt="FOto" />
                            )
                        })}
                    </div>
                </div>
                <div className='bg-huasteca-brown mb-5 mx-4 rounded-xl shadow-lg shadow-huasteca-brown'>
                    <div className='flex flex-col p-4'>
                        <div className='flex text-xl md:text-2xl'>
                            <p className='font-extrabold'>Lugar:</p>
                            <p className='ml-2 font-medium text-white'>{tour.lugar}</p>
                        </div>
                        <div className='flex mt-2 md:text-xl'>
                            <p className='font-extrabold'>Descripción:</p>
                            <p className='ml-2 font-medium text-white'>{tour.description}</p>
                        </div>
                        <div className='flex mt-2 md:text-xl'>
                            <p className='font-extrabold'>Fecha de Construccion:</p>
                            <p className='ml-2 font-medium text-white'>{tour.dateCreate}</p>
                        </div>
                        <div className='flex mt-2 md:text-xl'>
                            <p className='font-extrabold'>Constructores de obra:</p>
                            <p className='ml-2 font-medium text-white'>{tour.autores}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
